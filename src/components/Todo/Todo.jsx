import React, { useState } from "react";
// import { useDispatch } from "react-redux";

const Todo = ({ id, text, isFinished, editTodo, deleteTodo, finishTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [todoText, setTodoText] = useState(text);
  // const dispatch = useDispatch();

  function onEditTodo(todoText, id = 0) {
    if (id) {
      editTodo({ id, todoText });
      // dispatch({ type: "edit_todo", payload: { id, todoText } });
    }
  }

  function changeIsFinished(id) {
    finishTodo({ id });
    // dispatch({ type: "finish_todo", payload: { id } });
  }

  function onDeleteTodo(id) {
    deleteTodo({ id });
    // dispatch({ type: "delete_todo", payload: { id } });
  }

  return (
    <div className="todo-item">
      <input
        className="todo-checkbox"
        type="checkbox"
        checked={isFinished}
        onChange={() => changeIsFinished(id)}
      />

      {isEditing ? (
        <div className="todo-content">
          <input
            className="todo-input"
            type="text"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />

          <button
            className="save-btn"
            onClick={() => {
              onEditTodo(todoText, id);
              setIsEditing(false);
            }}
          >
            Save
          </button>
        </div>
      ) : (
        <div className="todo-content">
          <span className={isFinished ? "todo-text finished" : "todo-text"}>
            {text}
          </span>

          <button className="edit-btn" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </div>
      )}

      <button className="delete-btn" onClick={() => onDeleteTodo(id)}>
        Delete
      </button>
    </div>
  );
};

export default Todo;
