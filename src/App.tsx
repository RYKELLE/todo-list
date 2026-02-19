import { useEffect, useState } from "react";
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
    {
      id: 3,
      text: "GO to school and do 10 pushups",
      done: false,
    },
    {
      id: 4,
      text: "Clean the table",
      done: false,
    },
  ];

  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const onToggle = (id: number) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item,
      ),
    );
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <>
      <ToDoList todolist={todos} onToggle={onToggle} />
    </>
  );
}

export default App;
