import React from "react";

export default function TaskItem({ task, onToggle, onDelete, onEdit }) {
  const priorityColor = {
    Baixa: "bg-green-200 text-green-800",
    Normal: "bg-blue-200 text-blue-800",
    Alta: "bg-red-200 text-red-800",
    Média: "bg-yellow-200 text-yellow-800",
  };

  return (
    <li className="flex items-center justify-between bg-white p-3 rounded shadow hover:shadow-md transition">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={onToggle}
          className="w-5 h-5"
        />
        <div>
          <p className={`font-medium ${task.completed ? "line-through text-gray-400" : ""}`}>
            {task.title}
          </p>
          <span className={`text-xs px-2 py-1 rounded ${priorityColor[task.priority] || "bg-gray-200 text-gray-700"}`}>
            {task.priority}
          </span>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={onEdit}
          className="px-2 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
        >
          Editar
        </button>
        <button
          onClick={onDelete}
          className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Deletar
        </button>
      </div>
    </li>
  );
}
