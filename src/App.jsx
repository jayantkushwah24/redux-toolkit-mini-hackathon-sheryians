import Todos from "./components/Todos/Todos";
import AddTodo from "./components/AddTodo/AddTodo";

const App = () => {
  return (
    <div>
      <AddTodo />
      <Todos />
    </div>
  );
};

export default App;
