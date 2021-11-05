export enum TodoActionType {
  AddTodo = 'addTodo',
  UpdateTitle = 'updateTitle',
  UpdateChecked = 'updateChecked',
}

export enum TodoBackendEndpoints {
  GetTodos = '/',
  GetTodo = '/todo/',
  AddTodo = '/todo',
  UpdateTodo = '/todo/update/',
  CheckTodo = '/todo/check/',
  DeleteTodo = '/todo/',
}
