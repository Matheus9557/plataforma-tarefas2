import { render, screen } from '@testing-library/react';
import TaskList from '../components/TaskList';
import TaskItem from '../components/TaskItem';
import { describe, it, expect, vi } from 'vitest';
import React from 'react';

describe('TaskList', () => {
  const tasks = [
    { id: 1, title: 'Tarefa 1', priority: 'Normal', completed: false },
    { id: 2, title: 'Tarefa 2', priority: 'Alta', completed: true },
  ];

  it('renderiza lista de tarefas', () => {
    render(
      <TaskList
        tasks={tasks}
        onToggle={() => {}}
        onDelete={() => {}}
        onEdit={() => {}}
      />
    );
    expect(screen.getByText('Tarefa 1')).toBeInTheDocument();
    expect(screen.getByText('Tarefa 2')).toBeInTheDocument();
  });

  it('renderiza mensagem se lista estiver vazia', () => {
    render(
      <TaskList tasks={[]} onToggle={() => {}} onDelete={() => {}} onEdit={() => {}} />
    );
    expect(screen.getByText(/nenhuma tarefa/i)).toBeInTheDocument();
  });
});
