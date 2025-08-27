import React from 'react';
import { screen } from '@testing-library/react';
import TaskList from '../src/components/TaskList';
import { renderWithProviders } from './test-utils';
import { MemoryRouter } from 'react-router-dom';

test('TaskList renderiza lista de tarefas', () => {
  const tasks = [
    { id: 1, title: 'Tarefa 1', priority: 'Alta', completed: false },
    { id: 2, title: 'Tarefa 2', priority: 'Normal', completed: true },
  ];

  renderWithProviders(
    <MemoryRouter>
      <TaskList tasks={tasks} />
    </MemoryRouter>
  );

  expect(screen.getByText('Tarefa 1')).toBeInTheDocument();
  expect(screen.getByText('Tarefa 2')).toBeInTheDocument();
});
