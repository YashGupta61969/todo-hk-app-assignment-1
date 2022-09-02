import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([])

  return (
    <div className="app">
      <h1>Todo App</h1>
      <TodoInput set={setTodos}/>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
