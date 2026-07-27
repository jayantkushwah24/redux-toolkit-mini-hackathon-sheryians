import Todos from "./components/Todos/Todos";
import AddTodo from "./components/AddTodo/AddTodo";
import { bindActionCreators } from "redux";
import todoReducer, {
  addTodo,
  editTodo,
  deleteTodo,
  finishTodo,
} from "./slice/TodoSlice";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  const actions = bindActionCreators(
    { addTodo, editTodo, deleteTodo, finishTodo },
    dispatch,
  );

  return (
    <div>
      <AddTodo addTodo={actions.addTodo} />
      <Todos
        editTodo={actions.editTodo}
        deleteTodo={actions.deleteTodo}
        finishTodo={actions.finishTodo}
      />
    </div>
  );
};

export default App;
