import ToDoItem from "./ToDoItem";
import type { category, Todo } from "../types";

interface TodoListProps {
  todolist: Todo[];
  categories: category[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onClear: () => void;
}

const ToDoList = ({
  todolist,
  categories,
  onToggle,
  onDelete,
  onClear,
}: TodoListProps) => {
  return (
    <>
      <div>
        <h3>To do: </h3>
        {todolist
          .filter((item) => item.done === false) //keeps the items that are not yet done
          .map((item) => {
            const category = categories.find((c) => c.id === item.categoryId);
            return (
              <ToDoItem
                key={item.id}
                category={category}
                todo={item}
                onToggle={onToggle}
                onDelete={onDelete}
              /> //displays items that are not yet done
            );
          })}
      </div>
      <div>
        <div>
          <h3>Finished Tasks</h3>
          <button onClick={onClear}>Clear</button>
        </div>
        {todolist
          .filter((item) => item.done === true) //keeps the items that are done
          .map((item) => {
            const category = categories.find((c) => c.id === item.categoryId);
            return (
              <ToDoItem
                key={item.id}
                category={category}
                todo={item}
                onToggle={onToggle}
                onDelete={onDelete}
              />
            );
          })}
      </div>
    </>
  );
};

export default ToDoList;
