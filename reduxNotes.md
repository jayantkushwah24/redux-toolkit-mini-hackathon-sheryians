#Redux Toolkit - My notes and learning

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
