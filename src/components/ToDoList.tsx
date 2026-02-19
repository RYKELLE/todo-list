import ToDoItem from "./ToDoItem";
import type { Todo } from "../types";

interface TodoListProps {
  todolist: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const ToDoList = ({ todolist, onToggle, onDelete }: TodoListProps) => {
  return (
    <>
      {todolist
        .filter((item) => item.done === false) //keeps the items that are not yet done
        .map((item) => (
          <ToDoItem
            key={item.id}
            todo={item}
            onToggle={onToggle}
            onDelete={onDelete}
          /> //displays items that are not yet done
        ))}
    </>
  );
};

export default ToDoList;
