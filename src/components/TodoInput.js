import { useState } from "react";
import "./TodoInput.css";
import { Todo } from "./Todo";

export function TodoInput(props) {
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(x) {
    let input = x.target.value;
    setInputValue(input);
  }

  return (
    <div className="new-note">
      <input className="new-note__input" onChange={handleInputChange}></input>
      <button
        className="new-note__button"
        onClick={() => {
          props.onAdd(inputValue);
        }}
      >
        Add
      </button>
    </div>
  );
}

export function addNote(newValue) {
  console.log("function addNote fired");
  //setTodo.push(newValue);
  //alert('button "add" clicked');
  //Todo(newValue);
}
