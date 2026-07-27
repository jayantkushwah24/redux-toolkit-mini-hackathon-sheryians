// import { combineReducers, createStore } from "redux";
// import todoReducer from "./reducers/TodoReducers";

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './slice/TodoSlice'

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  devTools: true,
});

// const reducer = combineReducers({ todos: todoReducer });
// const store = createStore(reducer);

export default store;
