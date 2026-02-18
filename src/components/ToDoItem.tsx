import type { Todo } from "../types";

export interface toDoItemProp {
  todo: Todo;
}

const ToDoItem = ({ todo }: toDoItemProp) => {
  return (
    <div className="to-do-item">
      <input type="checkbox"></input>
      <span>{todo.text}</span>
      <button>x</button>
    </div>
  );
};

export default ToDoItem;
