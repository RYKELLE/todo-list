import ToDoItem from "./ToDoItem";
import type { Todo } from "../types";

interface TodoListProps {
  todolist: Todo[];
}

const ToDoList = ({ todolist }: TodoListProps) => {
  return (
    <>
      {todolist.map((item) => (
        <ToDoItem key={item.id} todo={item} />
      ))}
    </>
  );
};

export default ToDoList;
