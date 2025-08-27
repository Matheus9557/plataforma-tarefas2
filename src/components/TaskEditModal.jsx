import React, { useState } from "react";

export default function TaskEditModal({ task, onClose, onSave }) {
  const [title, setTitle] = useState(task.title);
  const [priority, setPriority] = useState(task.priority);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow w-80 flex flex-col gap-2">
        <h2 className="text-xl font-bold">Editar Tarefa</h2>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="px-2 py-1 border rounded focus:outline-none focus:ring focus:ring-blue-300"
        />
        <select
          value={priority}
          onChange={e => setPriority(e.target.value)}
          className="px-2 py-1 border rounded focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="Baixa">Baixa</option>
          <option value="Normal">Normal</option>
          <option value="Alta">Alta</option>
        </select>
        <div className="flex justify-end gap-2 mt-2">
          <button onClick={onClose} className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400">Cancelar</button>
          <button onClick={() => onSave({ ...task, title, priority })} className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">Salvar</button>
        </div>
      </div>
    </div>
  );
}
