import type { Todo, category } from "../types";
import "../styles/toDoitem.css";
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

  const isOverdue =
    todo.dueDate && new Date(todo.dueDate) < new Date() && !todo.done;

  const daysLeft = Math.ceil(
    (new Date(todo.dueDate!).getTime() - Date.now()) / 86400000,
  );

  let dateColorStatus = "";

  if (daysLeft <= 1) {
    dateColorStatus = "red";
  } else if (daysLeft > 1 && daysLeft <= 3) {
    dateColorStatus = "orange";
  } else {
    dateColorStatus = "green";
  }

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
      {isOverdue && <span className="overdue">OVERDUE!</span>}
      {!todo.done && !isOverdue && (
        <span style={{ backgroundColor: dateColorStatus }}>
          Due in {daysLeft} {daysLeft > 1 ? "days" : "day"}
        </span>
      )}
      <button onClick={() => onDelete(todo.id)}>x</button>
    </div>
  );
};

export default ToDoItem;
