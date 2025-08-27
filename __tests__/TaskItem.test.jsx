import { render, screen, fireEvent } from '@testing-library/react';
import TaskItem from '../src/components/TaskItem';
import React from 'react';

test('TaskItem renderiza tarefa e chama callbacks', () => {
  const task = { id: 1, title: 'Teste', priority: 'Alta', completed: false };
  const onToggleTask = jest.fn();
  const onDeleteTask = jest.fn();
  const onEditTask = jest.fn();

  render(<TaskItem task={task} onToggleTask={onToggleTask} onDeleteTask={onDeleteTask} onEditTask={onEditTask} />);

  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);
  expect(onToggleTask).toHaveBeenCalledWith(task.id);

  const editButton = screen.getByText('Editar');
  fireEvent.click(editButton);
  expect(onEditTask).toHaveBeenCalledWith(task);

  const deleteButton = screen.getByText('Excluir');
  fireEvent.click(deleteButton);
  expect(onDeleteTask).toHaveBeenCalledWith(task.id);
});
