import { useState } from "react";
import "./App.css";
import { TodoInput, addNote } from "./TodoInput";
import { Todo, deleteTodo } from "./Todo";

function App() {
  const [currentTodos, setTodos] = useState([]);

  function addButtonClicked(value) {
    setTodos([...currentTodos, value]);
    let inputEl = document.querySelector(".new-note__input");
    inputEl.value = "";
    inputEl.focus();
  }

  function deleteButtonClicked(btnEvent) {
    let findValue = btnEvent.target.getAttribute("data-value");
    let index = currentTodos.findIndex((value) => value == findValue);

    let newArray = [...currentTodos];
    newArray.splice(index, 1);

    setTodos(newArray);
  }

  return (
    <div className="App">
      <TodoInput onAdd={addButtonClicked} />
      <Todo
        todos={currentTodos}
        funktion={(event) => {
          deleteButtonClicked(event);
        }}
      />
    </div>
  );
}

export default App;
