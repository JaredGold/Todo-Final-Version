import React, { useState } from "react";
import { useTodos } from "../hooks/useTodos";
import { TextInput } from "./TextInput";

const TodoForm = () => {
  const [newTodoInput, updateNewTodoInput] = useState("");
  const { addTodo } = useTodos();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (newTodoInput !== "") {
      addTodo(newTodoInput);
      updateNewTodoInput("");
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
