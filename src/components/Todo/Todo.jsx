import React, { useState } from "react";

const Todo = ({
  id,
  text,
  isFinished,
  deleteTodoFn,
  changeIsFinished,
  addTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [todoText, setTodoText] = useState(text);

  return (
    <div>
      <input
        type="checkbox"
        checked={isFinished}
        onChange={() => changeIsFinished(id)}
      />

      {isEditing ? (
        <span>
          <input
            type="text"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
          <button
            onClick={() => {
              addTodo(todoText, id);
              setIsEditing(false);
            }}
          >
            Save
          </button>
        </span>
      ) : (
        <span>
          <span>{text}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </span>
      )}

      <button onClick={() => deleteTodoFn(id)}>Delete</button>
    </div>
  );
};

export default Todo;
