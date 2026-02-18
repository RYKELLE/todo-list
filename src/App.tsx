import { useState } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";
import type { Todo } from "./types";

function App() {
  const initialTodos: Todo[] = [
    {
      id: 1,
      text: "finish thesis and do some jogging",
      done: false,
    },
    {
      id: 2,
      text: "Finish to do list app",
      done: false,
    },
  ];

  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  return (
    <>
      <ToDoList todolist={todos} />
    </>
  );
}

export default App;
