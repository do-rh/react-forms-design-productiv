import { render, fireEvent } from "@testing-library/react";
import EditableTodo from "./EditableTodo";

const TEST_TODO = {
    title: "test title",
    description: "meow meow meow",
    priority: 1
};

const update = jest.fn();
const remove = jest.fn();

it("renders without crashing", function () {
    render(<EditableTodo todo={TEST_TODO} remove={remove} update={update} />);
});

it("matches snapshot", function () {
    const { container, debug } = render(<EditableTodo todo={TEST_TODO} remove={remove} update={update} />);
    expect(container).toMatchSnapshot();
});

it("renders edit and delete buttons", function () {
    const { container, debug } = render(<EditableTodo todo={TEST_TODO} remove={remove} update={update} />);
    expect(container).toContainHTML(`<button
        className="EditableTodo-toggle btn-link btn btn-sm"`);
    expect(container).toContainHTML(`<button
        className="EditableTodo-delBtn btn-link btn btn-sm text-danger`);
});

it("successfully calls delete function (from prop) when clicked", function () {
    const { container, debug } = render(<EditableTodo todo={TEST_TODO} remove={remove} update={update} />);
    const deleteBtn = document.getElementsByClassName("EditableTodo-delBtn")[0];
    fireEvent.click(deleteBtn);
    expect(remove).toBeCalledTimes(1);
});

//TODO: add test for form rendering