import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from '../src/components/TaskForm';
import React from 'react';

test('adiciona tarefa quando formulário é enviado', () => {
  const onAddTask = jest.fn();
  render(<TaskForm onAddTask={onAddTask} />);
  fireEvent.change(screen.getByPlaceholderText('Título da tarefa'), { target: { value: 'Teste' } });
  fireEvent.change(screen.getByPlaceholderText('Descrição'), { target: { value: 'Descrição teste' } });
  fireEvent.click(screen.getByText('Adicionar'));
  expect(onAddTask).toHaveBeenCalledTimes(1);
});
