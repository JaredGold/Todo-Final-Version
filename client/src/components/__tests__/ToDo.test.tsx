import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { ToDo } from '../ToDo';
import { Todo } from '../../types';

describe('<ToDo />', () => {
  it('renders an unchecked checkbox when passed an incomplete todo', () => {
    let testTodo: Todo = {
      id: 1,
      title: 'Banana',
      checked: false,
    };

    render(<ToDo todo={testTodo} />);

    const checkbox = screen.getByTestId('todo-checkbox');

    expect(checkbox).toHaveProperty('checked', false);
  });

  it('renders a checked checkbox when passed a complete todo', () => {
    let testTodo: Todo = {
      id: 1,
      title: 'Banana',
      checked: true,
    };

    render(<ToDo todo={testTodo} />);

    const checkbox = screen.getByTestId('todo-checkbox');

    expect(checkbox).toHaveProperty('checked', true);
  });

  it('renders the correct text when passed a title', () => {
    let testTodo: Todo = {
      id: 1,
      title: 'Banana',
      checked: true,
    };

    render(<ToDo todo={testTodo} />);

    const title = screen.getByText('Banana');

    expect(title).toBeInTheDocument();
  });
});
