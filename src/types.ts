export type Todo = {
  id: number;
  title: string;
  checked: boolean;
  removed: boolean;
};

export type Todos = Array<Todo>;

export type Action =
  | AddTodoAction
  | UpdateTitleAction
  | RemoveTodoAction
  | UpdateCheckedAction;

export type AddTodoAction = {
  type: "addTodo";
  payload: {
    todoTitle: string;
  };
};

export type UpdateTitleAction = {
  type: "updateTitle";
  payload: {
    id: number;
    todoTitle: string;
  };
};

export type RemoveTodoAction = {
  type: "removeTodo";
  payload: {
    id: number;
  };
};

export type UpdateCheckedAction = {
  type: "updateChecked";
  payload: {
    id: number;
  };
};
