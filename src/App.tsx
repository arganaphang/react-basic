import React from "react";
import Card from "~/components/Card";
import type { Todo } from "~/types/todo";
import { getAllTodo } from "~/services/todo";

const App: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<Error | null>(null);
  const [title, setTitle] = React.useState("");
  const [todos, setTodos] = React.useState<Todo[]>([]);

  React.useEffect(() => {
    setLoading(true);
    getAllTodo()
      .then((todos) => {
        setTodos(todos);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(e);
      });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos((prev) => {
      return [...prev, { id: Date.now(), title: title, completed: false }];
    });
    setTitle("");
  };

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (id === todo.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen grid place-content-center">
        <p>Loading . . . </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-screen grid place-content-center">
        <p>Error {error.message}</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen grid place-content-center">
      <div className="flex flex-col w-80 text-sm gap-4">
        <form
          className="flex bg-white rounded-md py-2 px-4 gap-4"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            type="text"
            className="flex-1 bg-transparent outline-none"
            placeholder="Add new todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            type="submit"
            className="bg-slate-400 py-2 px-4 text-white rounded-sm text-xs cursor-pointer"
          >
            Add
          </button>
        </form>
        <ul className="flex flex-col gap-2 h-80 overflow-auto">
          {todos.map((todo) => (
            <li key={todo.id}>
              <Card
                handleToggle={handleToggle}
                handleDelete={handleDelete}
                {...todo}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
