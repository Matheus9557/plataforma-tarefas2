import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from '../components/TaskForm';
import { describe, it, expect, vi } from 'vitest';
import React from 'react';

describe('TaskForm', () => {
  it('renderiza input e botão', () => {
    const onAddTask = vi.fn();
    render(<TaskForm onAddTask={onAddTask} />);
    expect(screen.getByPlaceholderText('Título da tarefa')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Descrição')).toBeInTheDocument();
    expect(screen.getByText('Adicionar')).toBeInTheDocument();
  });

  it('chama onAddTask ao enviar formulário', () => {
    const onAddTask = vi.fn();
    render(<TaskForm onAddTask={onAddTask} />);
    fireEvent.change(screen.getByPlaceholderText('Título da tarefa'), { target: { value: 'Teste' } });
    fireEvent.change(screen.getByPlaceholderText('Descrição'), { target: { value: 'Descrição teste' } });
    fireEvent.click(screen.getByText('Adicionar'));
    expect(onAddTask).toHaveBeenCalledTimes(1);
  });
});
