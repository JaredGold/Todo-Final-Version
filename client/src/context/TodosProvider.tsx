import { useEffect, useReducer } from "react";
import { TodosContext } from "./TodosContext";
import { Todos } from "../types";
import { reducer } from "../reducer/TodoReducer";
import { TodoActionType } from "../constants";

type Props = {
  children: React.ReactNode;
};

const createTodoState = (): Todos => {
  const storedTodos = localStorage.getItem("todos");
  return storedTodos ? JSON.parse(storedTodos) : [];
};

export const TodosProvider = (props: Props) => {
  const [todoState, dispatch] = useReducer(reducer, createTodoState());

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoState));
  }, [todoState]);

  const addTodo = (title: string) =>
    dispatch({
      type: TodoActionType.AddTodo,
      payload: { todoTitle: title }
    });

  const updateTitle = (id: number, title: string) =>
    dispatch({
      type: TodoActionType.UpdateTitle,
      payload: { id, todoTitle: title }
    });

  const removeTodo = (id: number) =>
    dispatch({
      type: TodoActionType.RemoveTodo,
      payload: { id }
    });

  const updateChecked = (id: number) =>
    dispatch({
      type: TodoActionType.UpdateChecked,
      payload: { id }
    });
  const value = { todoState, addTodo, updateTitle, removeTodo, updateChecked };

  return <TodosContext.Provider value={value} {...props} />;
};
