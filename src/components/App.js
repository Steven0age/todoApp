import { useState } from "react";
import "./App.css";
import { TodoInput, addNote } from "./TodoInput";
import { Todo, deleteTodo } from "./Todo";

function App() {
  const [currentTodos, setTodos] = useState([]);

  function buttonClicked(value) {
    setTodos([...currentTodos, value]);
  }

  return (
    <div className="App">
      <TodoInput onAdd={buttonClicked} />
      ;
      <Todo
        todos={currentTodos}
        funktion={() => {
          deleteTodo();
        }}
      />
    </div>
  );
}

export default App;
