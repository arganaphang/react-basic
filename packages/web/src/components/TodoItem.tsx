import React from "react";
import { Todo } from "@/types";

interface Props {
  todo: Todo;
}

const TodoItem: React.FC<Props> = ({ todo }) => {
  const onToggleTodo = () => {
    // TODO: Update This
  };

  const onDeleteTodo = () => {
    // TODO: Update This
  };

  return (
    <label className="flex gap-2 items-center py-3 px-6 border rounded-md select-none cursor-pointer">
      <input
        type="checkbox"
        checked={todo.is_done}
        onChange={onToggleTodo}
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
      />
      <p
        style={{ textDecorationLine: todo.is_done ? "line-through" : "none" }}
        className="flex-1"
      >
        {todo.title}
      </p>
      <button
        onClick={onDeleteTodo}
        className="w-8 h-8 rounded-md bg-red-200 text-red-600 transition-colors hover:bg-red-600 hover:text-red-100"
      >
        ✕
      </button>
    </label>
  );
};

export default TodoItem;
