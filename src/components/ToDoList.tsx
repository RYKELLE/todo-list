import ToDoItem from "./ToDoItem";
import "../styles/toDoList.css";
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
  const sortedTodos = [...todolist].sort((a, b) => {
    if (a.done !== b.done) return a.done ? 1 : -1;

    if (!a.dueDate && !b.dueDate) return 0;
    if (!a.dueDate) return 1;
    if (!b.dueDate) return -1;

    return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
  });

  return (
    <div className="todo-lists">
      <div className="todo-column">
        <h3>To do</h3>
        <div className="list-body">
          {sortedTodos
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
      </div>
      <div className="finished-column">
        <div className="finished-tasks">
          <h3>Finished Tasks</h3>
          <button className="clear" onClick={onClear}>
            Clear
          </button>
        </div>
        <div className="list-body">
          {sortedTodos
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
      </div>
    </div>
  );
};

export default ToDoList;
