import { useState } from "react";
import "./TodoInput.css";

export function TodoInput(props) {
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    let input = event.target.value;
    setInputValue(input);
  }

  return (
    <div className="new-note">
      <input className="new-note__input" onChange={handleInputChange}></input>
      <button
        className="new-note__button"
        onClick={() => {
          props.onAdd({ text: inputValue, done: false });
        }}
      >
        Add
      </button>
    </div>
  );
}
