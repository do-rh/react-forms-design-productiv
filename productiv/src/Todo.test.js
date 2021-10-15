import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo";
const TEST_TODO = {
    title: "test title",
    description: "meow meow meow",
    priority: 1
};

it("renders without crashing", function () {
    render(<Todo {...TEST_TODO}/>)
});

it("matches snapshot", function () {
    const { container, debug } = render(<Todo {...TEST_TODO}/>)
    expect(container).toMatchSnapshot();
});

it("renders inputs correctly", function () {
    const { container, debug } = render(<Todo {...TEST_TODO}/>)
    expect(container).toContainHTML(TEST_TODO.title);
    expect(container).toContainHTML(TEST_TODO.description);
    expect(container).toContainHTML(`<small>Priority: ${TEST_TODO.priority}</small>`);
});