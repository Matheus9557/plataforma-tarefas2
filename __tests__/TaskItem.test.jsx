import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import TaskItem from '../src/components/TaskItem';
import { renderWithProviders } from './test-utils';

test('TaskItem renderiza tarefa e chama callbacks', () => {
  const task = { id: 1, title: 'Teste', priority: 'Alta', completed: false };
  const onToggleTask = jest.fn();
  const onDeleteTask = jest.fn();
  const onEditTask = jest.fn();

  renderWithProviders(
    <TaskItem
      task={task}
      onToggle={ () => onToggleTask(task.id) }
      onDelete={ () => onDeleteTask(task.id) }
      onEdit={ () => onEditTask(task) }
    />
  );

  fireEvent.click(screen.getByRole('checkbox'));
  expect(onToggleTask).toHaveBeenCalledWith(task.id);

  fireEvent.click(screen.getByText(/editar/i));
  expect(onEditTask).toHaveBeenCalledWith(task);

  fireEvent.click(screen.getByText(/deletar/i));
  expect(onDeleteTask).toHaveBeenCalledWith(task.id);
});
