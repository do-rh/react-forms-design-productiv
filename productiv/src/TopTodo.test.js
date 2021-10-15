import { render, fireEvent } from "@testing-library/react";
import TopTodo from "./TopTodo";

const initialTodos = [
    {
      id: 1,
      title: "Code!",
      description: "Write some code",
      priority: 2,
    },
    {
      id: 2,
      title: "Make dinner",
      description: "Cook something healthy",
      priority: 1,
    },
    {
      id: 3,
      title: "Go to bed",
      description: "In bed by 11:15",
      priority: 3
    }
];

it("renders without crashing", function () {
    render(<TopTodo todos={initialTodos}/>)
});

it("matches snapshot", function () {
    const { container, debug } = render(<TopTodo todos={initialTodos}/>)
    expect(container).toMatchSnapshot();
});

it("correctly identifies the top todo", function () {
    const { container, debug } = render(<TopTodo todos={initialTodos}/>)
    debug()
    expect(container).toContainHTML(initialTodos[1].title);
    expect(container).toContainHTML(initialTodos[1].description);
    expect(container).toContainHTML(`${initialTodos[1].priority}`);

    //doesn't render other todos
    expect(container).not.toContainHTML(initialTodos[0].title);
    expect(container).not.toContainHTML(initialTodos[0].description);
    expect(container).not.toContainHTML(`${initialTodos[0].priority}`);
});