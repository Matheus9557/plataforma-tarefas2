import React from "react";
import { Link } from "react-router-dom";

export default function TaskList({ tasks, onToggle, onDelete, onEdit }) {
  return (
    <ul className="max-w-md mx-auto space-y-2">
      {tasks.map(task => (
        <li key={task.id} className="flex justify-between items-center p-2 bg-white rounded shadow">
          <div className="flex items-center gap-2">
            <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
            <span className={task.completed ? "line-through" : ""}>{task.title} ({task.priority})</span>
          </div>
          <div className="flex gap-2">
            <button onClick={() => onEdit(task)} className="text-blue-500 hover:underline">Editar</button>
            <Link to={`/task/${task.id}`} className="text-purple-500 hover:underline">Detalhes</Link>
            <button onClick={() => onDelete(task.id)} className="text-red-500 hover:underline">Deletar</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
