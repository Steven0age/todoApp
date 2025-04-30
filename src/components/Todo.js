import "./Todo.css";

export function Todo(props) {
  if (props.todos.length === 0) {
    return <div className="single-todo">Keine Todos</div>;
  }
  let newHtml = props.todos.map((todo) => {
    const id = todo.text + Math.random();
    return (
      <div id={id} key={id} className="single-todo">
        <input
          onChange={() => {
            props.handleChange(todo);
          }}
          className="single-todo__checkbox"
          type="checkbox"
          checked={todo.done}
        ></input>
        <p
          className={
            todo.done
              ? "single-todo__description single-todo__input--crossed"
              : "single-todo__description"
          }
        >
          {todo.text}
        </p>
        <button
          className="single-todo__delete-btn"
          data-value={todo.text}
          onClick={props.handleDelete}
        >
          Löschen
        </button>
      </div>
    );
  });
  return newHtml;
}
