import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask as addTaskRedux } from "../store/tasksSlice";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Normal");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = { 
      id: Date.now().toString(), 
      title, 
      priority, 
      completed: false 
    };
    dispatch(addTaskRedux(newTask));
    setTitle("");
    setPriority("Normal");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Nova tarefa"
        className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300 mb-2"
      />
      
      <select
        value={priority}
        onChange={e => setPriority(e.target.value)}
        className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300 mb-2"
      >
        <option value="Baixa">Baixa</option>
        <option value="Normal">Normal</option>
        <option value="Alta">Alta</option>
      </select>

      <button 
        type="submit" 
        className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Adicionar
      </button>
    </form>
  );
};

export default TaskForm;
