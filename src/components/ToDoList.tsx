import ToDoItem from "./ToDoItem";
import type { Todo } from "../types";

interface TodoListProps {
  todolist: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onClear: () => void;
}

const ToDoList = ({ todolist, onToggle, onDelete, onClear }: TodoListProps) => {
  return (
    <>
      <div>
        <h3>To do: </h3>
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
      </div>
      <div>
        <div>
          <h3>Finished Tasks</h3>
          <button onClick={onClear}>Clear</button>
        </div>
        {todolist
          .filter((item) => item.done === true) //keeps the items that are done
          .map((item) => (
            <ToDoItem
              key={item.id}
              todo={item}
              onToggle={onToggle}
              onDelete={onDelete}
            /> //displays items that are done
          ))}
      </div>
    </>
  );
};

export default ToDoList;
