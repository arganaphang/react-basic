import React from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";

type CardProps = {
  id: number;
  title: string;
  isDone: boolean;
  createdAt: Date;
  handleToggle: (id: number) => void;
  handleDelete: (id: number) => void;
};

const Card: React.FC<CardProps> = ({
  id,
  title,
  isDone,
  handleToggle,
  handleDelete,
}) => {
  return (
    <div className="flex items-center bg-white rounded-md py-2 px-4 gap-4">
      <input
        type="checkbox"
        checked={isDone}
        onChange={() => handleToggle(id)}
      />
      <p
        className={`flex-1 line-clamp-1 ${
          isDone ? "line-through text-slate-300 transition-all" : ""
        }`}
      >
        {title}
      </p>
      <XCircleIcon
        width={24}
        height={24}
        className="text-red-500"
        onClick={() => handleDelete(id)}
      />
    </div>
  );
};

export default Card;
