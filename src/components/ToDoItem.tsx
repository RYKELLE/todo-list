import type { Todo, category } from "../types";
import "../styles/category.css";
export interface ToDoItemProp {
  todo: Todo;
  category: category | undefined;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const ToDoItem = ({ todo, category, onToggle, onDelete }: ToDoItemProp) => {
  const pretty = todo.dueDate
    ? new Date(todo.dueDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "";

  return (
    <div className="to-do-item">
      <span
        className="category"
        style={{ backgroundColor: category?.color ?? "#E5E7EB" }}
      >
        {category?.name}
      </span>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
      ></input>
      <span>{todo.text}</span>
      <span>{pretty}</span>
      <button onClick={() => onDelete(todo.id)}>x</button>
    </div>
  );
};

export default ToDoItem;
