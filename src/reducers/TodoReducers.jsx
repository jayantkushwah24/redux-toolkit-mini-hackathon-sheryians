function todoReducer(state, action) {
  if (action.type === "add_todo") {
    let newTodos = [
      ...state,
      {
        id: crypto.randomUUID(),
        text: action.payload.todoText,
        isFinished: false,
      },
    ];
    return newTodos;
  } else if (action.type === "edit_todo") {
    let newTodos = state.map((todo) =>
      todo.id === action.payload.id
        ? { ...todo, text: action.payload.todoText }
        : todo,
    );
    return newTodos;
  } else if (action.type === "delete_todo") {
    let newTodos = state.filter((todo) => todo.id !== action.payload.id);
    return newTodos;
  } else if (action.type === "finish_todo") {
    let newTodos = state.map((todo) =>
      todo.id === action.payload.id
        ? { ...todo, isFinished: !todo.isFinished }
        : todo,
    );
    return newTodos;
  }
  return state;
}

export default todoReducer;
