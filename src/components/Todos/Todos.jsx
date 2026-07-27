import React from "react";
import Todo from "../Todo/Todo";
import { useSelector } from "react-redux";

const Todos = ({ editTodo, deleteTodo, finishTodo }) => {
  const todos = useSelector((state) => state.todos.todoList);
  // const todos = useSelector((state) => state.todos);

  return (
    <div>
      {todos &&
        todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            isFinished={todo.isFinished}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
            finishTodo={finishTodo}
          />
        ))}
    </div>
  );
};

export default Todos;
