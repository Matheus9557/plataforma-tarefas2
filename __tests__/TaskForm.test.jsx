import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import TaskForm from '../src/components/TaskForm';
import { renderWithProviders } from './test-utils';

test('adiciona tarefa quando formulário é enviado', () => {
  const onAddTask = jest.fn();
  renderWithProviders(<TaskForm onAddTask={onAddTask} />);

  fireEvent.change(screen.getByPlaceholderText('Título da tarefa'), { target: { value: 'Teste' } });
  fireEvent.change(screen.getByPlaceholderText('Descrição'), { target: { value: 'Descrição teste' } });
  fireEvent.click(screen.getByText(/adicionar/i));

  expect(onAddTask).toHaveBeenCalledTimes(1);
});
