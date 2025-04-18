import logo from "../logo.svg";
import "./App.css";
import { NewNote, addNote } from "./NewNote";
import { Todo, deleteTodo } from "./Todo";

function App() {
  return (
    <div className="App">
      <NewNote prop={addNote} />;
      <Todo
        funktion={() => {
          deleteTodo();
        }}
      />
    </div>
  );
}

export default App;
