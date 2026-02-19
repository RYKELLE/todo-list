import { useEffect, useState } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";
import type { Todo } from "./types";

function App() {
  const initialTodos: Todo[] = [];

  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos != null) return JSON.parse(savedTodos);
    return initialTodos;
  });

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

  const onClear = () => {
    setTodos((prev) => prev.filter((item) => item.done === false));
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
    localStorage.setItem("todos", JSON.stringify(todos));
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
      <ToDoList
        todolist={todos}
        onToggle={onToggle}
        onDelete={onDelete}
        onClear={onClear}
      />
    </>
  );
}

export default App;
