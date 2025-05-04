import "./TodoInput.css";

export function TodoInput(props) {
  return (
    <div className="new-note">
      <input
        className="new-note__input"
        onChange={props.changeEvent}
        value={props.value}
      ></input>
      <button className="new-note__button" onClick={props.onAdd}>
        Add
      </button>
    </div>
  );
}
