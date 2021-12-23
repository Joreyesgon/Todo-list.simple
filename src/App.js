import React, { useState, useEffect } from "react";
import "../src/App.css"
import TodoForm from "./components/TodoFrom";
import TodoList from "./components/TodoList";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
  const [todos, setTodos] = useState ([]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  return (
    <div className="App">
      <p>React Todo</p>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
