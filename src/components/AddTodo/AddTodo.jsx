import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [todoText, setTodoText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={todoText}
        onChange={(e) => {
          setTodoText(e.target.value);
        }}
        placeholder="add your next todo"
      />
      <button
        onClick={() => {
          addTodo(todoText);
          setTodoText("");
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default AddTodo;
