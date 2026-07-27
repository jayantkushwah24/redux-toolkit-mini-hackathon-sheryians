# Redux Toolkit - My notes and learning

## why we need redux toolkit?

- When project is small, we can pass down the data from parent to child components using props. But when the project grows, it becomes difficult to manage the state and pass down the data through multiple levels of components. Redux Toolkit provides a way to manage the state in a centralized store, making it easier to share data across components.

## why not context api?

- context api is good way to provide data/state amoung the components of project but its good until good is small.
- once the project start growing larger and larger..context api starts failing. and it become very hard to manage stuff via context api.

## what is reducer functions?

- the callback function of eventlisteners become problematic when the app gets larger so to solve this problem we have reducers.
- reducers are just functions. nothing more nothing less.
- reducer function accepts two parameters. (1) state of the app (2) action
- action : {type:<string>, payload:{}} ... action is nothing just a plain object.
- reducer function return the new state after updating it or returns the same old state.
- whatever object we pass in dispatch fucntion will be recieved via second parameter(action) of reducer function ...function todoReducer(state,action){}

## what is useReducer?

- there is hook named useReducer provided by react.
- useReducer accept two arguments i.e. (1) reducer function (2) initial state...
- useReducer gonna return an array where first parameter is state variable and second parameter is called dispatch.
- const [todos, dispatch] = useReducer(reducer,[]);
- dispatch will be the function we are going to use in order to trigger a action(action are just task) so we need to trigger it. so to trigger a action it we have to call dispatch funtion.
- dispatch function take only one argument i.e. one action object including type property and payload property.

## what is redux?

- a js library for predictable and maintainable global state management.
- predictable: redux help you write applications that behave consistently, run in different environment (client, server, and native) and they are easy to test.
- centralized: centralizing your application state and logic enables powerful capabilities like undo/redo , state persistence and much more.
- debuggable: the redux devtool make it easy to trace when, where, why, and how your application state changed. redux's architecture lets you log changes, use "time-travel debugging", and even send complete error reports to server.
- flexible: redux works with any ui layer, and has a large ecosystem of addons to fit your needs.

# redux has five functions

- createStore
- combineReducer
- compose
- applyMiddleware
- bindActionCreators

## (1) compose

- if we want to compose a bunch of function one after another like f(g(h(x))) then we can do like const composedFunction = compose(h,g,f);
- whatever the function return will the argument of the next function... for example h return whatever will the argument of g function here

## (2) createStore

- using createStore we can create common store for our application.
- store is the combination of common state and a bunch of utilites methods.
- we can create a store by calling createStore() method...this method expect two parameter i.e. first one is reducer function and second one is initial state.
- let store = createStore(reducer,[]);
- this method return a plain js object and this js object gives us access to four more methods:-
- (i) **getState**: it helps us to get the access of the state stored inside the store. (store.getState())
- (ii) **replaceReducer**: lets say if we prepare a store using a reducer and now we want to replace that reducer due to some condition..so under that condition we can use replaceReducer.
- (iii) **dispatch**: we can dispatch our action like- store.dispatch({type:"add",payload:{text}})
- (iv) **subscribe**: this subscribe method take a callback store.subscribe(()=>{})...at any point of time you will dispatch a action, if you have subscibe to a particular function every time you dispatch a action that function will be automatically executed...for example we can console.log the state every time we dispatch.

## (3) bindActionCreator

- const action = bindActionCreator({addTodo,deleteTodo},store.dispatch)
- bindActionCreator bind the methods of first argument to the second parameter now we can call like action.addTodo() instead of store.dispatch.addTodo()
- there is one use case of bindActionCreator is that we dont want to give access of dispatch method to some components then we can pass this.

## (4) combineReducer

- lets say we have multiple reducers like todoReducer,userReducer etc so that we can separately manage entities..but createStore accept only one reducer...that is where we use combineReducer.
- combineReducer combine the multiple reducers.
- const reducer = combineReducer({todos: todoReducer, users: userReducer})

## (5) applyMiddleware

- applyMiddleware helps us to modify incoming action request

# how to integrate redux into the project?

## how to install redux into our project?

- just run these commands into the terminal below:-
- npm install redux
- npm install react-redux
- npm install @reduxjs/toolkit react-redux

## how we can provide the store?

- redux provide the <Provide store={store}></Provide> component, so we have to wrap the component and in that component we can access the store.

## how we can access the store into the component?

- redux provide some hooks to access the store eg. (1) useDispatch (2) useSelector
- (1) **useDispatch()**: provides functional components with access to the dispatch function from the Redux store, allowing them to trigger state updates by sending actions
- (2) **useSelector()**: allows functional components to extract data from the Redux store. inside useSelector pass a selector function that receives the entire store state and returns the specific slice of data your component needs.. const todos = useSelector(state => state.todos);

# Redux Toolkit

## what is redux toolkit?

- Redux Toolkit (RTK) is the official, recommended way to write Redux logic.
- It is built on top of Redux and removes most of the boilerplate code.
- It provides utilities for creating stores, reducers, actions, and handling immutable updates.
- Redux Toolkit uses Immer internally, so we can write "mutating" logic safely inside reducers.

---

## why redux toolkit over redux?

- Traditional Redux requires writing lots of boilerplate code.
- We have to manually create action types, action creators, reducers, and configure the store.
- Redux Toolkit simplifies all of this by providing helper functions.

Traditional Redux

```js
const ADD_TODO = "ADD_TODO";

function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: text,
  };
}

function reducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
}
```

Redux Toolkit

```js
const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
  },
});
```

Much shorter and easier to maintain.

---

## how to install redux toolkit?

```bash
npm install @reduxjs/toolkit react-redux
```

---

## createSlice()

- createSlice is the most important function in Redux Toolkit.
- It automatically creates:
  - reducer
  - action creators
  - action types
- We only need to write reducer functions.

Syntax

```js
const slice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
});
```

Parameters

### (1) name

- unique name of the slice.
- used while generating action types.

Example

```js
name: "todos";
```

Generated action type

```
todos/addTodo
todos/deleteTodo
```

---

### (2) initialState

- the initial value of this slice.

Example

```js
const initialState = {
  todoList: [],
};
```

---

### (3) reducers

- object containing all reducer functions.
- every reducer receives
  - state
  - action

Example

```js
reducers: {
    addTodo(state, action) {},
    deleteTodo(state, action) {},
    editTodo(state, action) {}
}
```

---

## createSlice automatically creates actions

Suppose we have

```js
reducers: {
    addTodo(state, action) {},
    deleteTodo(state, action) {}
}
```

Then Redux Toolkit automatically creates

```js
addTodo();
deleteTodo();
```

We can export them like

```js
export const { addTodo, deleteTodo } = todoSlice.actions;
```

---

## exporting reducer

At the end of every slice

```js
export default todoSlice.reducer;
```

Later it is added into the Redux store.

---

## configureStore()

configureStore replaces createStore from Redux.

Instead of

```js
createStore(reducer);
```

we use

```js
const store = configureStore({
  reducer: {
    todos: todoReducer,
    users: userReducer,
  },
});
```

Benefits

- combines reducers automatically
- enables Redux DevTools automatically
- includes useful middleware by default
- simpler configuration

---

## creating store

```js
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
```

---

## Provider

Provider makes the Redux store available to every component.

```jsx
import { Provider } from "react-redux";
import { store } from "./store";

<Provider store={store}>
  <App />
</Provider>;
```

Usually we wrap our App component in main.jsx or index.js.

---

## useDispatch()

- returns the dispatch function.
- used to dispatch actions.

```js
const dispatch = useDispatch();

dispatch(
  addTodo({
    todoText: "Learn Redux Toolkit",
  }),
);
```

---

## useSelector()

- reads data from the Redux store.
- receives the complete store state.
- returns only the required data.

```js
const todos = useSelector((state) => state.todos.todoList);
```

---

## action.payload

When we dispatch

```js
dispatch(
  addTodo({
    todoText: "Learn Redux",
  }),
);
```

Inside reducer

```js
addTodo(state, action) {
    console.log(action.payload);
}
```

Output

```js
{
  todoText: "Learn Redux";
}
```

---

## Immer

Redux state should never be mutated directly.

Traditional Redux

```js
return {
  ...state,
  count: state.count + 1,
};
```

Redux Toolkit uses Immer internally.

So this is completely valid

```js
state.count++;
```

Immer converts this into an immutable update behind the scenes.

---

## example addTodo reducer

```js
addTodo(state, action) {
    state.todoList.push({
        id: crypto.randomUUID(),
        text: action.payload.todoText,
        isFinished: false
    });
}
```

Even though push() mutates the array, Immer makes it immutable internally.

---

## folder structure

```
src
|
|-- app
|     store.js
|
|-- features
|      todo
|          todoSlice.js
|
|-- components
|      AddTodo.jsx
|      Todo.jsx
|      TodoList.jsx
|
|-- App.jsx
```

---

## redux data flow

```
Component

      ↓

dispatch(action)

      ↓

Reducer (inside Slice)

      ↓

Store updates

      ↓

useSelector gets updated state

      ↓

Component re-renders
```

---

## best practices

- keep only global state inside Redux.
- keep local UI state inside useState().
- create one slice per feature.
- keep reducers pure.
- avoid putting derived data in the store.
- use useSelector only for the data a component actually needs.
- use meaningful action names like addTodo, deleteTodo, updateUser.

---

## when should we use Redux?

Use Redux when

- multiple components need the same data.
- state is shared across different pages.
- application has authentication state.
- shopping cart.
- theme management.
- notifications.
- user profile.
- complex dashboards.
- caching API data.

Don't use Redux when

- state belongs to only one component.
- state is temporary (modal open/close, input fields, dropdowns).
- simple parent-child communication is enough.

For local component state, prefer useState or useReducer.

---

# Summary

```
Redux Toolkit
    ↓
createSlice()
    ↓
creates
    ├── reducer
    ├── actions
    └── action types

configureStore()
    ↓
creates Redux store

Provider
    ↓
makes store available

useDispatch()
    ↓
dispatch actions

useSelector()
    ↓
read state

Reducer
    ↓
updates state

Store changes
    ↓
React re-renders UI
```
