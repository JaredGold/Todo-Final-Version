import React from "react";
import invariant from "tiny-invariant";
import { TodosContext } from "../context/TodosContext";

export const useTodos = () => {
  const context = React.useContext(TodosContext);

  invariant(context, "useTodos must be used within a TodosProvider");

  return context;
};
