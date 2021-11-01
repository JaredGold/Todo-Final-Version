import { createContext } from "react";
import { Todos } from "../types";

type TodosData = {
  todoState: Todos;
  addTodo: (todoTitle: string) => void;
  updateTitle: (id: number, title: string) => void;
  removeTodo: (id: number) => void;
  updateChecked: (id: number) => void;
};

export const TodosContext = createContext<undefined | TodosData>(undefined);
