import { render, fireEvent } from "@testing-library/react";
import EditableTodoList from "./EditableTodoList";

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

xit("renders without crashing", function () {
  render(<EditableTodoList {...TEST_TODO} />)
});

xit("matches snapshot", function () {
  const { container, debug } = render(<EditableTodoList {...TEST_TODO} />)
  expect(container).toMatchSnapshot();
});
