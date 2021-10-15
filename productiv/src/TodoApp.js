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
    console.log("newtod prio", newTodo.priority);
    //TODO: could just copy the objects from the old since we're not actually changing old data
    setTodos(todos => {
      const todosCopy = todos.map(todo => todo);
      todosCopy.push({
        ...newTodo,
        id: uuid()
      });
      console.log("todoCopy", todosCopy);
      return todosCopy;
    });
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {

    setTodos(oldTodos => {
      // QUESTION: do we need to make a copy of updatedTodo?
      //TODO: could just use slice
      const oldTodosCopy = oldTodos.map(todo => { return { ...todo } });
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

  //TODO: make todos.length===0 a const 
  return (
    <main className="TodoApp">
      <div className="row">

        <div className="col-md-6">
          {todos.length !== 0
            ? <EditableTodoList todos={todos} update={update} remove={remove} />
            : <span className="text-muted">You have no todos.</span>
          }
        </div>

        <div className="col-md-6">
          {todos.length !== 0
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