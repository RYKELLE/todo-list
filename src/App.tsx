import { useEffect, useState } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";
import type { Todo } from "./types";

function App() {
  const initialTodos: Todo[] = [
    {
      id: "1",
      text: "finish thesis and do some jogging",
      done: false,
    },
    {
      id: "2",
      text: "Finish to do list app",
      done: false,
    },
    {
      id: "3",
      text: "GO to school and do 10 pushups",
      done: false,
    },
    {
      id: "4",
      text: "Clean the table",
      done: false,
    },
  ];

  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [newtodo, setNewtodo] = useState("");

  const onToggle = (id: string) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item,
      ),
    );
  };

  const onDelete = (id: string) => {
    setTodos((prev) => prev.filter((item) => item.id != id));
  };

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newtodo.trim() === "") return;
    const newTodoobject = {
      id: crypto.randomUUID(),
      text: newtodo,
      done: false,
    };

    setTodos((prev) => [...prev, newTodoobject]);
    setNewtodo("");
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Enter tasks"
          value={newtodo}
          onChange={(e) => setNewtodo(e.target.value)}
        ></input>
        <button type="submit">Done</button>
      </form>
      <ToDoList todolist={todos} onToggle={onToggle} onDelete={onDelete} />
    </>
  );
}

export default App;
