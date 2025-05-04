import { useState } from "react";
import "./App.css";
import { TodoInput } from "./components/TodoInput/TodoInput";
import { Todo } from "./components/Todo/Todo";

function App() {
  const [currentTodos, setTodos] = useState([]);

  function checkboxClicked(todoIndex) {
    console.log("todoIndex =", todoIndex);
    let index = currentTodos.findIndex((value) => value === todoIndex);
    let newArray = [...currentTodos];

    if (currentTodos[index].done === true) {
      newArray[index].done = false;
    } else {
      newArray[index].done = true;
    }

    setTodos(newArray);
  }

  function addButtonClicked(value) {
    if (!inputValue) {
      alert("Bitte ein Todo eingeben");
      return;
    }

    setTodos([...currentTodos, { text: inputValue, done: false }]);

    let inputEl = document.querySelector(".new-note__input");
    inputEl.value = "";
    setInputValue("");
    inputEl.focus();
  }

  function deleteButtonClicked(btnEvent) {
    let findIndex = btnEvent.target.getAttribute("data-index");

    let newArray = [...currentTodos];
    newArray.splice(findIndex, 1);

    setTodos(newArray);
  }

  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    const input = event.target.value;
    console.log(input);
    setInputValue(input);
  }

  return (
    <div className="App">
      <TodoInput onAdd={addButtonClicked} changeEvent={handleInputChange} />
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
