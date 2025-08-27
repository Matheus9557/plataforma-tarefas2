import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, toggleTask, deleteTask, updateTask } from "../store/tasksSlice";
import TaskForm from "../components/TaskForm";
import TaskFilter from "../components/TaskFilter";
import TaskList from "../components/TaskList";
import TaskEditModal from "../components/TaskEditModal";

export default function Tasks() {
  const tasks = useSelector((state) => state.tasks.list);
  const dispatch = useDispatch();

  const [filter, setFilter] = useState("Todas");
  const [editingTask, setEditingTask] = useState(null);

  const handleToggle = (id) => dispatch(toggleTask(id));
  const handleDelete = (id) => dispatch(deleteTask(id));
  const handleEditOpen = (task) => setEditingTask(task);
  const handleEditSave = (updatedTask) => {
    dispatch(updateTask(updatedTask));
    setEditingTask(null);
  };
  const handleCloseModal = () => setEditingTask(null);

  // filtragem simples
  const filtered = tasks.filter((t) => {
    if (filter === "Todas") return true;
    if (filter === "Pendentes") return !t.completed;
    if (filter === "Concluídas") return t.completed;
    return true;
  });

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow p-6 mt-6">
        <h2 className="text-2xl font-bold mb-4">Minhas Tarefas</h2>

        <TaskForm />

        <TaskFilter filter={filter} setFilter={setFilter} />

        {filtered.length === 0 ? (
          <p className="text-gray-500">Nenhuma tarefa encontrada.</p>
        ) : (
          <TaskList
            tasks={filtered}
            onToggle={handleToggle}
            onDelete={handleDelete}
            onEdit={handleEditOpen}
          />
        )}
      </div>

      {editingTask && (
        <TaskEditModal
          task={editingTask}
          onClose={handleCloseModal}
          onSave={(t) => handleEditSave(t)}
        />
      )}
    </div>
  );
}
