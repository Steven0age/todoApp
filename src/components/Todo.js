import { useState } from "react";
import "./Todo.css";

export function Todo(props) {
  if (props.todos.length == 0) {
    return <div className="single-todo">Keine Todos</div>;
  }
  let newHtml = props.todos.map((todo) => {
    const id = todo + Math.random();
    return (
      <div id={id} key={id} className="single-todo">
        <input
          onChange={() => {
            markedAsDone(id);
          }}
          className="single-todo__checkbox"
          type="checkbox"
        ></input>
        <p className="single-todo__description">{todo}</p>
        <button
          className="single-todo__delete-btn"
          data-value={todo}
          onClick={props.handleDelete}
        >
          Löschen
        </button>
      </div>
    );
  });
  return newHtml;
}

function markedAsDone(id) {
  let inputEl = document.getElementById(id).querySelector("input");
  let paragraphEl = document.getElementById(id).querySelector("p");

  if (inputEl.checked) {
    paragraphEl.classList.add("single-todo__input--crossed");
  } else {
    paragraphEl.classList.remove("single-todo__input--crossed");
  }
}
