import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, toggleTask, deleteTask } from "./store/tasksSlice";

export default function App() {
  const tasks = useSelector(state => state.tasks.tasks);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");

  const handleAdd = () => {
    if (!newTask) return;
    dispatch(addTask({ id: Date.now().toString(), title: newTask, completed: false }));
    setNewTask("");
  };

  return (
    <div>
      <h1>Todo</h1>
      <input value={newTask} onChange={e => setNewTask(e.target.value)} />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {tasks.map(t => (
          <li key={t.id}>
            <input type="checkbox" checked={t.completed} onChange={() => dispatch(toggleTask(t.id))} />
            {t.title}
            <button onClick={() => dispatch(deleteTask(t.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
