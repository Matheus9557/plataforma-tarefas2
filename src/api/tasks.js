const API_URL = "http://localhost:3000/tasks";

export const fetchTasks = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Erro ao buscar tarefas");
  return await res.json();
};

export const addTask = async (task) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  if (!res.ok) throw new Error("Erro ao adicionar tarefa");
  return await res.json();
};

export const updateTask = async (task) => {
  const res = await fetch(`${API_URL}/${task.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  if (!res.ok) throw new Error("Erro ao atualizar tarefa");
  return await res.json();
};

export const deleteTask = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Erro ao deletar tarefa");
};
