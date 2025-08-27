import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateTask, deleteTask } from "../store/tasksSlice";

export default function TaskDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const task = useSelector(state => state.tasks.list.find(t => t.id === id));

  const [title, setTitle] = useState(task?.title || "");
  const [priority, setPriority] = useState(task?.priority || "Normal");

  if (!task) return <p className="text-center mt-10">Tarefa não encontrada.</p>;

  const handleSave = () => {
    dispatch(updateTask({ ...task, title, priority }));
    navigate("/");
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Detalhes da Tarefa</h1>

      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="mb-2 px-3 py-2 rounded border w-64 focus:outline-none focus:ring focus:ring-blue-300"
      />

      <select
        value={priority}
        onChange={e => setPriority(e.target.value)}
        className="mb-4 w-64 px-3 py-2 rounded border focus:outline-none focus:ring focus:ring-blue-300"
      >
        <option value="Baixa">Baixa</option>
        <option value="Normal">Normal</option>
        <option value="Alta">Alta</option>
      </select>

      <div className="flex gap-2">
        <button onClick={handleSave} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Salvar</button>
        <button onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Deletar</button>
      </div>
    </div>
  );
}
