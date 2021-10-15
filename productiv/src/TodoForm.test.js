import { render, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm";
const TEST_TODO = {
    title: "test title",
    description: "meow meow meow",
    priority: 1
};

const handleSave = jest.fn()
const emptyFormVals = { title: "", description: "", priority: 1 };
// const initialFormData = { title: "oldFormData", description: "woofwoofwoof", priority: 3 };

it("renders without crashing", function () {
    render(<TodoForm initialFormData={TEST_TODO} handleSave={handleSave} />)
});

it("matches snapshot", function () {
    const { container, debug } = render(<TodoForm initialFormData={TEST_TODO} handleSave={handleSave} />)
    expect(container).toMatchSnapshot();
});

test("no initial data is passed in", function () {
    const { container, debug } = render(<TodoForm handleSave={handleSave} />)
    const titleDom = document.getElementById("newTodo-title");
    const descriptionDom = document.getElementById("newTodo-description");
    const priorityDom = document.getElementById("newTodo-priority");
    expect(titleDom.value).toBe("");
    expect(descriptionDom.value).toBe("");
    expect(priorityDom.value).toBe("1");
})

test("works: initial data is passed in", function () {
    const { container, debug } = render(<TodoForm initialFormData={TEST_TODO} handleSave={handleSave} />)
    const titleDom = document.getElementById("newTodo-title");
    const descriptionDom = document.getElementById("newTodo-description");
    const priorityDom = document.getElementById("newTodo-priority");
    expect(titleDom.value).toBe("test title");
    expect(descriptionDom.value).toBe("meow meow meow");
    expect(priorityDom.value).toBe("1");
})

test("handleSubmit gets called on form submit and form empties", function () {
    const { container, debug } = render(<TodoForm handleSave={handleSave} />)
    const form = document.getElementsByClassName("NewTodoForm");
    fireEvent.submit(form[0]);
    expect(handleSave).toBeCalledTimes(1)
})

