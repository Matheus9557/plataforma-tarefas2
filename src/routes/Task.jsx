import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import TaskFilter from "../components/TaskFilter";
import {
  addTask,
  updateTask,
  deleteTask,
  toggleTask,
  setFilter,
} from "../store/tasksSlice";

export default function Task() {
  const dispatch = useDispatch();
  const { tasks, filter } = useSelector((state) => state.tasks);
  const [taskToEdit, setTaskToEdit] = React.useState(null);

  // Lida com adicionar e editar
  const handleAddTask = (task) => {
    dispatch(addTask(task));
  };

  const handleUpdateTask = (updatedTask) => {
    dispatch(updateTask(updatedTask));
    setTaskToEdit(null);
  };

  const handleCancelEdit = () => setTaskToEdit(null);

  // Filtros
  const filteredTasks = tasks.filter((task) => {
    if (filter === "pending") return !task.completed;
    if (filter === "completed") return task.completed;
    return true; // all
  });

  const totalPending = tasks.filter((t) => !t.completed).length;

  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl mb-4">Plataforma de Tarefas</h1>

      <TaskForm
        onAddTask={handleAddTask}
        onUpdateTask={handleUpdateTask}
        onCancel={handleCancelEdit}
        taskToEdit={taskToEdit}
      />

      <TaskFilter filter={filter} setFilter={(f) => dispatch(setFilter(f))} />

      <TaskList
        tasks={filteredTasks}
        onToggleTask={(id) => dispatch(toggleTask(id))}
        onDeleteTask={(id) => dispatch(deleteTask(id))}
        onEditTask={(task) => setTaskToEdit(task)}
      />

      <p className="mt-4 font-semibold">Total pendentes: {totalPending}</p>
    </div>
  );
}
