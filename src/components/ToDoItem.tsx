import type { Todo } from "../types";

export interface ToDoItemProp {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const ToDoItem = ({ todo, onToggle, onDelete }: ToDoItemProp) => {
  return (
    <div className="to-do-item">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
      ></input>
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>x</button>
    </div>
  );
};

export default ToDoItem;
