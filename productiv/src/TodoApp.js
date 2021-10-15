import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({ initialTodos }) {
  const [todos, setTodos] = useState(initialTodos);

  /** add a new todo to list */
  function create(newTodo) {
    setTodos(todos => {
      const todosCopy = todos.slice();
      todosCopy.push({
        ...newTodo,
        id: uuid()
      });
      return todosCopy;
    });
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {

    setTodos(oldTodos => {
      const oldTodosCopy = oldTodos.slice();
      const todoIdx = oldTodosCopy.findIndex(todo => todo.id === updatedTodo.id);
      oldTodosCopy[todoIdx] = updatedTodo;
      return oldTodosCopy;
    });
  }

  /** delete a todo by id */
  function remove(id) {
    setTodos(oldTodos =>
      oldTodos.filter(todo => todo.id !== id)
    );
  }
  const isEmpty = (todos.length === 0);
  
  return (
    <main className="TodoApp">
      <div className="row">

        <div className="col-md-6">
          {!isEmpty
            ? <EditableTodoList todos={todos} update={update} remove={remove} />
            : <span className="text-muted">You have no todos.</span>
          }
        </div>

        <div className="col-md-6">
          {!isEmpty
            ? <section className="mb-4">
              <h3>Top Todo</h3>
              <TopTodo todos={todos} />
            </section>
            : null
          }

          <section>
            <h3 className="mb-3">Add Nü</h3>
            <TodoForm handleSave={create} />
          </section>
        </div>

      </div>
    </main>
  );
}

export default TodoApp;