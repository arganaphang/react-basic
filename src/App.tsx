import React from "react";
import Card from "~/components/Card";

type Todo = {
  id: number;
  title: string;
  isDone: boolean;
  createdAt: Date;
};

const App: React.FC = () => {
  const [title, setTitle] = React.useState("");
  const [todos, setTodos] = React.useState<Todo[]>([
    {
      id: 1,
      title: "First Todo",
      isDone: false,
      createdAt: new Date(),
    },
  ]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // prevent to redirect to another page
    e.preventDefault();
    // add to todos state
    setTodos((prev) => {
      return [
        ...prev,
        { id: Date.now(), title: title, isDone: false, createdAt: new Date() },
      ];
    });
    // clear input
    setTitle("");
  };

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (id === todo.id) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      })
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

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
