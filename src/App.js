import TodoInput from './Components/TodoInput';
// import TodoItem from './Components/TodoItem';
import TodoList from './Components/TodoList';
import "./Components/todo.css";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App m-5">
      <TodoInput/>
      <TodoList/>
    </div>
  );
}

export default App;
