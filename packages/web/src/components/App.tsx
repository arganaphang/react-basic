import { useState } from "react";
import Form from "./Form";
import TodoItem from "./TodoItem";
import { Todo } from "@/types";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAddTodo = ({ title }: { title: string }) => {
    const newTodo: Todo = {
      id: Date.now(),
      title: title,
      is_done: false,
    };
    setTodos((prev) => {
      return [newTodo, ...prev];
    });
  };

  const onToggleTodo = ({ id }: { id: number }) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          todo.is_done = !todo.is_done;
        }
        return todo;
      });
    });
  };

  const onDeleteTodo = ({ id }: { id: number }) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <div className="h-96 w-[600px] flex flex-col">
        <Form onAddTodo={onAddTodo} />
        <ul className="mt-4 flex-1 overflow-y-auto flex flex-col gap-2">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggleTodo={onToggleTodo}
              onDeleteTodo={onDeleteTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
