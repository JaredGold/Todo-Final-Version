import "@testing-library/jest-dom";
import { TodosProvider } from "../../context/TodosProvider";
import TodoList from "../TodoList";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import React from "react";

const renderApp = () => {
  return render(
    <TodosProvider>
      <TodoList />
    </TodosProvider>
  );
};

const setupTest = () => {
  localStorage.clear();
  return renderApp();
};

test("it creates a todo and renders it to the screen", async () => {
  setupTest();

  const todoInput = screen.getByTestId("new-todo-input");

  userEvent.type(todoInput, "Tie my shoe{Enter}");

  expect(screen.getByText("Tie my shoe")).toBeInTheDocument();
});

// Test to be fixed when feature is implemented.
test("it does not display a todo if it was removed", async () => {
  setupTest();

  const todoInput = screen.getByTestId("new-todo-input");

  userEvent.type(todoInput, "Fly a kite{Enter}");
  expect(screen.getByText("Fly a kite")).toBeInTheDocument();

  const removeTodoButton = screen.getByTestId("todo-remove-button");
  userEvent.click(removeTodoButton);

  expect(screen.queryByText("Fly a kite")).not.toBeInTheDocument();
});

test("it saves Todos to the localStorage", () => {
  const { unmount } = setupTest();

  const todoInput = screen.getByTestId("new-todo-input");

  userEvent.type(todoInput, "Please save{Enter}");
  expect(screen.getByText("Please save")).toBeInTheDocument();

  unmount();
  renderApp();
  expect(screen.getByText("Please save")).toBeInTheDocument();
});
