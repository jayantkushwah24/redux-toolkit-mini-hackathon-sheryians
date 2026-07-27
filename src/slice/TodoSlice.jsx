import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push({
        id: crypto.randomUUID(),
        text: action.payload.todoText,
        isFinished: false,
      });
    },
    editTodo: (state, action) => {
      state.todoList = state.todoList.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.todoText }
          : todo,
      );
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload.id,
      );
    },
    finishTodo: (state, action) => {
      state.todoList = state.todoList.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, isFinished: !todo.isFinished }
          : todo,
      );
    },
  },
});

export const { addTodo, editTodo, deleteTodo, finishTodo } = todoSlice.actions;
export default todoSlice.reducer;
