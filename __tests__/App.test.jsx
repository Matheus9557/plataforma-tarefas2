import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../store/tasksSlice';
import { describe, it, expect } from 'vitest';
import React from 'react';

const store = configureStore({ reducer: { tasks: tasksReducer } });

describe('App', () => {
  it('renderiza título principal', () => {
    render(<Provider store={store}><App /></Provider>);
    expect(screen.getByText(/todo/i)).toBeInTheDocument();
  });

  it('adiciona tarefa usando input e botão', () => {
    render(<Provider store={store}><App /></Provider>);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Nova Tarefa' } });
    fireEvent.click(screen.getByText(/add/i));

    expect(store.getState().tasks.tasks[0].title).toBe('Nova Tarefa');
  });
});
