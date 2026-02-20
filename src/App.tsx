import { useEffect, useState } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";
import type { Todo, category } from "./types";
import CategorySelector from "./components/CategorySelector";

function App() {
  const initialTodos: Todo[] = [];
  const categories: category[] = [
    {
      id: "1",
      name: "None",
      color: "#E5E7EB", // soft gray
    },
    {
      id: "2",
      name: "School",
      color: "#3B82F6", // clean blue
    },
    {
      id: "3",
      name: "Work",
      color: "#10B981", // modern green
    },
    {
      id: "4",
      name: "Entertainment",
      color: "#F59E0B", // warm amber
    },
    {
      id: "5",
      name: "Fitness",
      color: "#EF4444", // red
    },
    {
      id: "6",
      name: "Personal",
      color: "#8B5CF6", // violet
    },
    {
      id: "7",
      name: "Thesis",
      color: "#14B8A6", // teal
    },
  ];

  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos != null) return JSON.parse(savedTodos);
    return initialTodos;
  });

  const [newtodo, setNewtodo] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [todoDate, setTodoDate] = useState<string>("");

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
      dueDate: todoDate,
      categoryId: selectedCategory,
    };

    setTodos((prev) => [...prev, newTodoobject]);
    setNewtodo("");
    setSelectedCategory("");
    setTodoDate("");
  };

  const onSelectCategory = (id: string) => {
    setSelectedCategory(id);
  };

  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    console.log(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <form onSubmit={handleAdd}>
        <CategorySelector
          categories={categories}
          selectedId={selectedCategory}
          onSelect={onSelectCategory}
        />
        <input
          type="text"
          placeholder="Enter tasks"
          value={newtodo}
          onChange={(e) => setNewtodo(e.target.value)}
        ></input>
        <input
          type="date"
          value={todoDate}
          onChange={(e) => setTodoDate(e.target.value)}
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
