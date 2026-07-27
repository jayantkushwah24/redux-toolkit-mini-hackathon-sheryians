import React, { useState } from "react";
// import { useDispatch } from "react-redux";

const AddTodo = ({ addTodo }) => {
  const [todoText, setTodoText] = useState("");
  // const dispatch = useDispatch();

  function onAddTodo(todoText) {
    addTodo({ todoText });
    // dispatch({ type: "add_todo", payload: { todoText } });
  }

  return (
    <div className="add-todo">
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
          onAddTodo(todoText);
          setTodoText("");
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default AddTodo;
