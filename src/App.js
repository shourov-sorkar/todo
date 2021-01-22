import TodoInput from './Components/TodoInput';
import TodoItem from './Components/TodoItem';
import TodoList from './Components/TodoList';
import "./Components/todo.css";
function App() {
  return (
    <div className="App">
      <TodoInput/>
      <TodoItem/>
      <TodoList/>
    </div>
  );
}

export default App;
