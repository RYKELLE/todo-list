import type { Todo } from "../types";

export interface ToDoItemProps {
  todo: Todo;
  onToggle: (id: number, done: boolean) => void;
}

const ToDoItem = ({ todo, onToggle }: ToDoItemProps) => {
  return (
    <div className="to-do-item">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => onToggle(todo.id, e.target.checked)}
      />
      <span>{todo.text}</span>
      <button>x</button>
    </div>
  );
};

export default ToDoItem;
