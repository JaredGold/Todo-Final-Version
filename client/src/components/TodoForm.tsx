import React, { useState } from 'react';
import { TextInput } from './TextInput';
import { useAddTodo } from '../hooks/useTodos';

const TodoForm = () => {
  const [newTodoInput, updateNewTodoInput] = useState<string>('');

  const mutation = useAddTodo();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (newTodoInput !== '') {
      mutation.mutate(newTodoInput);
      updateNewTodoInput('');
    }
  };

  const handleSubmitInputChange = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    updateNewTodoInput(event.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        type="text"
        value={newTodoInput}
        placeholder="Create Todo"
        onChange={handleSubmitInputChange}
        data-testid="new-todo-input"
      />
    </form>
  );
};

export default TodoForm;
