import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddTodo = () => {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  function addTodo(todoText, id = 0) {
    dispatch({ type: "add_todo", payload: { todoText } });
  }

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
