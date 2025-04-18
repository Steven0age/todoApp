import { useState } from "react";
import "./Todo.css";

export function Todo({ input, funktion }) {
  const [currentTodos, setTodos] = useState(["Bügeln", "Wäsche waschen"]);
  //console.log("currentTodos =", currentTodos);
  //state mit Anzahl der TODO's
  //map Funktion, die für jedes Todo eine neue Cart rendert
  let newHtml = currentTodos.map((todo) => {
    return (
      <div key={todo} className="single-todo">
        <input className="single-todo__checkbox" type="checkbox"></input>
        <p className="single-todo__input">{todo}</p>
        <button className="single-todo__delete" onClick={funktion}>
          Löschen
        </button>
      </div>
    );
  });
  console.log("newHtml =", newHtml);
  return newHtml;
}

export function deleteTodo(id) {
  alert(id, "wurde gelöscht");
}
