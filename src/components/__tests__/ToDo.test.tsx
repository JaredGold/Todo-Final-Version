import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import ToDo from "../ToDo";
import { Todo } from "../../types";
import { TodosProvider } from "../../context/TodosProvider";

describe("<ToDo />", () => {
  it("renders an unchecked checkbox when passed an uncomplete todo", () => {
    let testTodo: Todo = {
      id: 1,
      title: "Banana",
      checked: false,
      removed: false
    };

    render(
      <TodosProvider>
        <ToDo todo={testTodo} />
      </TodosProvider>
    );

    const checkbox = screen.getByTestId("todo-checkbox");

    expect(checkbox).toHaveProperty("checked", false);
  });

  it("renders a checked checkbox when passed a complete todo", () => {
    let testTodo: Todo = {
      id: 1,
      title: "Banana",
      checked: true,
      removed: false
    };

    render(
      <TodosProvider>
        <ToDo todo={testTodo} />
      </TodosProvider>
    );

    const checkbox = screen.getByTestId("todo-checkbox");

    expect(checkbox).toHaveProperty("checked", true);
  });

  it("renders the correct text when passed a title", () => {
    let testTodo: Todo = {
      id: 1,
      title: "Banana",
      checked: true,
      removed: false
    };

    render(
      <TodosProvider>
        <ToDo todo={testTodo} />
      </TodosProvider>
    );

    const title = screen.getByText("Banana");

    expect(title).toBeInTheDocument();
  });
});
