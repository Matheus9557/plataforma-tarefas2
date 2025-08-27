import { render, screen, fireEvent } from '@testing-library/react';
import TaskItem from '../components/TaskItem';
import { describe, it, expect, vi } from 'vitest';
import React from 'react';

describe('TaskItem', () => {
  const task = { id: 1, title: 'Teste', priority: 'Alta', completed: false };

  it('renderiza tarefa corretamente', () => {
    render(<TaskItem task={task} onToggle={() => {}} onDelete={() => {}} onEdit={() => {}} />);
    expect(screen.getByText('Teste')).toBeInTheDocument();
    expect(screen.getByText('Alta')).toBeInTheDocument();
  });

  it('chama callbacks ao interagir', () => {
    const onToggle = vi.fn();
    const onDelete = vi.fn();
    const onEdit = vi.fn();

    render(<TaskItem task={task} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />);

    fireEvent.click(screen.getByRole('checkbox'));
    expect(onToggle).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByText('Editar'));
    expect(onEdit).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByText('Deletar'));
    expect(onDelete).toHaveBeenCalledTimes(1);
  });
});
