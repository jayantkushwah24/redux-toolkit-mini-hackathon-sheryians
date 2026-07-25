import React, { useEffect, useState } from "react";
import Todos from "./components/Todos/Todos";
import AddTodo from "./components/AddTodo/AddTodo";

const App = () => {
  let [todos, setTodos] = useState([]);

  function addTodo(todoText, id = 0) {
    if (id) {
      let newTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, text: todoText } : todo,
      );
      setTodos(newTodos);
    } else {
      let newTodos = [
        ...todos,
        {
          id: crypto.randomUUID(),
          text: todoText,
          isFinished: false,
        },
      ];
      setTodos(newTodos);
    }
  }

  function deleteTodo(id) {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  function changeIsFinished(id) {
    let newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isFinished: !todo.isFinished } : todo,
    );
    setTodos(newTodos);
  }

  useEffect(() => {
    console.log(todos);
  }, [todos]);

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
