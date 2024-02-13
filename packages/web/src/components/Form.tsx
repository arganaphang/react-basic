import React, { useState } from "react";

interface Props {
  onAddTodo: ({ title }: { title: string }) => void;
}

const Form: React.FC<Props> = ({ onAddTodo }) => {
  const [title, setTitle] = useState("");

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddTodo({ title });
    setTitle("");
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex">
      <input
        type="text"
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
        className="block w-full rounded-l-md border-0 py-3 px-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none"
      />
      <button
        type="submit"
        className="rounded-r-md py-3 px-8 bg-black text-white"
      >
        add
      </button>
    </form>
  );
};

export default Form;
