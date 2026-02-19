import ToDoItem from "./ToDoItem";
import type { Todo } from "../types";

interface TodoListProps {
  todolist: Todo[];
  onToggle: (id: number) => void;
}

const ToDoList = ({ todolist, onToggle }: TodoListProps) => {
  return (
    <>
      {todolist
        .filter((item) => item.done === false) //keeps the items that are not yet done
        .map((item) => (
          <ToDoItem key={item.id} todo={item} onToggle={onToggle} /> //displays items that are not yet done
        ))}
    </>
  );
};

export default ToDoList;
