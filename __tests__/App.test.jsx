import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import App from '../src/App';
import { renderWithProviders } from './test-utils';
import { MemoryRouter } from 'react-router-dom';

test('adiciona tarefa através do App', () => {
  renderWithProviders(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  fireEvent.change(screen.getByPlaceholderText('Título da tarefa'), { target: { value: 'Nova Tarefa' } });
  fireEvent.change(screen.getByPlaceholderText('Descrição'), { target: { value: 'Descrição teste' } });
  fireEvent.click(screen.getByText(/adicionar/i));

  expect(screen.getByText('Nova Tarefa')).toBeInTheDocument();
});
