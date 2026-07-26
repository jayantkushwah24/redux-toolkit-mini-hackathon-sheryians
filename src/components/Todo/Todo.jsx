import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Todo = ({ id, text, isFinished }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [todoText, setTodoText] = useState(text);
  const dispatch = useDispatch();

  function editTodo(todoText, id = 0) {
    if (id) {
      dispatch({ type: "edit_todo", payload: { id, todoText } });
    }
  }

  function changeIsFinished(id) {
    dispatch({ type: "finish_todo", payload: { id } });
  }

  function deleteTodo(id) {
    dispatch({ type: "delete_todo", payload: { id } });
  }

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
              editTodo(todoText, id);
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

      <button onClick={() => deleteTodo(id)}>Delete</button>
    </div>
  );
};

export default Todo;
