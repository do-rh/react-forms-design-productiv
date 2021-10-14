import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";

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

function TodoApp() {
  const [todos, setTodos] = useState([]);


  /** add a new todo to list */
  function create(newTodo) {
    setTodos(todos => {
      const todosCopy = todos.map(todo => {...todo})
    todosCopy.push({
      ...newTodo,
      id: uuid()
      });
    }
  }

//Receive formData obj
//Get id from formData obj to identify which todo to update
/** update a todo with updatedTodo */
function update(updatedTodo) {

  //findIndexOf (func => id = id)
  // make a copy, modify that index

  function updateTodos(oldTodos) {
    const todoIdx = todos.findIndex(todo => todo.id === updatedTodo.id);
    let newTodos = 
    }
  setTodos(oldTodos => updateTodos(oldTodos));
    );
}
  }

/** delete a todo by id */
function remove(id) {
}

return (
  <main className="TodoApp">
    <div className="row">

      <div className="col-md-6">
        <EditableTodoList /> OR
        <span className="text-muted">You have no todos.</span>
      </div>

      <div className="col-md-6">
        (if no top todo, omit this whole section)
        <section className="mb-4">
          <h3>Top Todo</h3>
          <TopTodo />
        </section>

        <section>
          <h3 className="mb-3">Add Nü</h3>
          FIXME
        </section>
      </div>

    </div>
  </main>
);
}

export default TodoApp;