import ToDoItem from "./ToDoItem";
import type { Todo } from "../types";

interface TodoListProps {
  todolist: Todo[];
  onToggle: (id: number, done: boolean) => void;
}

const ToDoList = ({ todolist, onToggle }: TodoListProps) => {
  return (
    <>
      {todolist.map((item) => (
        <ToDoItem key={item.id} todo={item} onToggle={onToggle} />
      ))}
    </>
  );
};

export default ToDoList;
