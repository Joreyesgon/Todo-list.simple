import React, { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoFrom";

function App() {
  const [todos, setTodos] = useState ([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos])
  }


  return (
    <div className="App">
      <TodoForm addtodo={addTodo}/>
    </div>
  );
}

export default App;
