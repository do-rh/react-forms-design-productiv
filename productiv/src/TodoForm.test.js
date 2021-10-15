import { render } from "@testing-library/react";
import TodoForm from "./TodoForm";
const TEST_TODO = {
    title: "test title",
    description: "meow meow meow",
    priority: 1
};

const emptyFormVals = { title: "", description: "", priority: 1 };
const initialFormData = { title: "oldFormData", description: "woofwoofwoof", priority: 3 };

it("renders without crashing", function () {
    render(<TodoForm {...TEST_TODO}/>)
});

it("matches snapshot", function () {
    const { container, debug } = render(<TodoForm {...TEST_TODO}/>)
    expect(container).toMatchSnapshot();
});
