import { useState } from "react";
import "./App.css";
import { TodoInput } from "./TodoInput";
import { Todo } from "./Todo";

function App() {
  const [currentTodos, setTodos] = useState([]);

  function checkboxClicked(todoID) {
    let index = currentTodos.findIndex((value) => value === todoID);
    let newArray = [...currentTodos];

    if (currentTodos[index].done === true) {
      newArray[index].done = false;
    } else {
      newArray[index].done = true;
    }
    setTodos(newArray);
  }

  function addButtonClicked(value) {
    if (!value) {
      alert("Bitte ein Todo eingeben");
      return;
    }

    setTodos([...currentTodos, value]);

    let inputEl = document.querySelector(".new-note__input");
    inputEl.value = "";
    inputEl.focus();
  }

  function deleteButtonClicked(btnEvent) {
    let findValue = btnEvent.target.getAttribute("data-value");
    let index = currentTodos.findIndex((value) => value === findValue);

    let newArray = [...currentTodos];
    newArray.splice(index, 1);

    setTodos(newArray);
  }

  return (
    <div className="App">
      <TodoInput onAdd={addButtonClicked} />
      <Todo
        todos={currentTodos}
        todoDone={currentTodos}
        handleChange={(index) => {
          checkboxClicked(index);
        }}
        handleDelete={(event) => {
          deleteButtonClicked(event);
        }}
      />
    </div>
  );
}

export default App;
