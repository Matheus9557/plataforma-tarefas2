import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    list: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.list.push(action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.list.find((t) => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    deleteTask: (state, action) => {
      state.list = state.list.filter((t) => t.id !== action.payload);
    },
    updateTask: (state, action) => {
      const updated = action.payload; // objeto de tarefa completo { id, title, priority, completed... }
      const idx = state.list.findIndex((t) => t.id === updated.id);
      if (idx !== -1) state.list[idx] = { ...state.list[idx], ...updated };
    },
  },
});

export const { addTask, toggleTask, deleteTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;
