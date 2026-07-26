import React from "react";
import Todo from "../Todo/Todo";
import { useSelector } from "react-redux";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      {todos &&
        todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            isFinished={todo.isFinished}
          />
        ))}
    </div>
  );
};

export default Todos;
