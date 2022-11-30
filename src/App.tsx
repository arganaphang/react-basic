import React from "react";
import Card from "~/components/Card";
import type { Todo } from "~/types/todo";
import { getAllTodo } from "~/services/todo";
import { useQuery } from "@tanstack/react-query";

const App: React.FC = () => {
  const [title, setTitle] = React.useState("");
  const {
    data: todos,
    isLoading,
    isError,
    error,
  } = useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: getAllTodo,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Handle Submit");
    setTitle("");
  };

  const handleToggle = (id: number) => {
    console.log("Handle Toggle");
  };

  const handleDelete = (id: number) => {
    console.log("Handle Delete");
  };

  if (isLoading) {
    return (
      <div className="w-full min-h-screen grid place-content-center">
        <p>Loading . . . </p>
      </div>
    );
  }

  if (isError) {
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
