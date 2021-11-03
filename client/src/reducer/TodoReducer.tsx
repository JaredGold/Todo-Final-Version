import { Todos, Todo } from "../types";
import {
  Action,
  AddTodoAction,
  UpdateTitleAction,
  RemoveTodoAction,
  UpdateCheckedAction
} from "../types";
import { TodoActionType } from "../constants";

const createNewId = (todos: Todos): number => {
  if (todos.length === 0) return 1;
  return todos[todos.length - 1].id + 1;
};

function assertUnreachable(): never {
  throw new Error("You should not get here");
}

const addTodo = (state: Todos, action: AddTodoAction): Todos => {
  let newTodo: Todo = {
    // look into converting id to UUID using package
    id: createNewId(state),
    title: action.payload.todoTitle,
    checked: false,
    removed: false
  };

  return [...state, newTodo];
};

const updateTitle = (state: Todos, action: UpdateTitleAction): Todos => {
  const updatedTodos = state.map((todo) => {
    if (todo.id === action.payload.id) {
      return {
        ...todo,
        title: action.payload.todoTitle
      };
    }
    return todo;
  });
  return updatedTodos;
};

const removeTodo = (state: Todos, action: RemoveTodoAction): Todos => {
  const updatedTodos = state.map((todo) => {
    if (todo.id === action.payload.id) {
      return {
        ...todo,
        removed: true
      };
    }
    return todo;
  });
  return updatedTodos;
};

const updateChecked = (state: Todos, action: UpdateCheckedAction) => {
  const updatedTodos = state.map((todo) => {
    if (todo.id === action.payload.id) {
      return {
        ...todo,
        checked: !todo.checked
      };
    }
    return todo;
  });
  return updatedTodos;
};

export const reducer = (state: Todos, action: Action): Todos => {
  switch (action.type) {
    case TodoActionType.AddTodo:
      return addTodo(state, action);
    case TodoActionType.UpdateTitle:
      return updateTitle(state, action);
    case TodoActionType.RemoveTodo:
      return removeTodo(state, action);
    case TodoActionType.UpdateChecked:
      return updateChecked(state, action);
    default:
      return assertUnreachable();
  }
};
