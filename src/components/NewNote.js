import { use, useRef, useState } from "react";
import "./NewNote.css";
import { Todo } from "./Todo";

export function NewNote(prop) {
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(x) {
    console.log(x.target.value);
    let input = x.target.value;
    setInputValue(input);
    console.log(inputValue);
  }
  return (
    <div className="new-note">
      <input className="new-note__input" onChange={handleInputChange}></input>
      <button
        className="new-note__button"
        onClick={() => {
          addNote(inputValue);
        }}
      >
        Add
      </button>
    </div>
  );
}

export function addNote(newValue) {
  console.log("function addNote fired");
  //alert('button "add" clicked');
  Todo(newValue);
}
