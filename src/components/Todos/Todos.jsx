import React from "react";
import Todo from "../Todo/Todo";

const Todos = ({ todos, deleteTodoFn, changeIsFinished, addTodo }) => {
  return (
    <div>
      {todos &&
        todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            isFinished={todo.isFinished}
            deleteTodoFn={deleteTodoFn}
            changeIsFinished={changeIsFinished}
            addTodo={addTodo}
          />
        ))}
    </div>
  );
};

export default Todos;
