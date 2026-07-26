import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/TodoReducers";

const reducer = combineReducers({ todos: todoReducer });

const store = createStore(reducer);

export default store;
