import React, { useEffect, useReducer, useState } from "react";
import Todos from "./components/Todos/Todos";
import AddTodo from "./components/AddTodo/AddTodo";
import todoReducer from "./reducers/TodoReducers";

const App = () => {
  let [todos, dispatch] = useReducer(todoReducer, []);

  function addTodo(todoText, id = 0) {
    if (id) {
      dispatch({ type: "edit_todo", payload: { id, todoText } });
    } else {
      dispatch({ type: "add_todo", payload: { todoText } });
    }
  }

  function deleteTodo(id) {
    dispatch({ type: "delete_todo", payload: { id } });
  }

  function changeIsFinished(id) {
    dispatch({ type: "finish_todo", payload: { id } });
  }

  return (
    <div>
      <AddTodo addTodo={addTodo} />
      <Todos
        todos={todos}
        deleteTodoFn={deleteTodo}
        changeIsFinished={changeIsFinished}
        addTodo={addTodo}
      />
    </div>
  );
};

export default App;
