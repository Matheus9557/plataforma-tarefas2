import { configureStore, createSlice } from '@reduxjs/toolkit';

// Slice de tarefas
const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    filter: 'Todas',
  },
  reducers: {
    setTasks: (state, action) => { state.tasks = action.payload },
    addTask: (state, action) => { state.tasks.push(action.payload) },
    toggleTask: (state, action) => {
      const task = state.tasks.find(t => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(t => t.id !== action.payload);
    },
    editTask: (state, action) => {
      const { id, updatedTask } = action.payload;
      state.tasks = state.tasks.map(t => t.id === id ? { ...t, ...updatedTask } : t);
    },
    setFilter: (state, action) => { state.filter = action.payload },
  }
});

export const { setTasks, addTask, toggleTask, deleteTask, editTask, setFilter } = tasksSlice.actions;

export const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer
  }
});
