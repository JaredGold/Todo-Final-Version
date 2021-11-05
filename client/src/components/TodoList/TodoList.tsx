import TodoForm from '../TodoForm';
import { ToDo } from '../ToDo';
import { Todo } from '../../types';
import { TodoContainer } from './TodoContainer';
import { TodoListStyled } from './TodoListStyled';
import { useGetTodos } from '../../hooks/useTodos';

export const TodoList = () => {
  const { isLoading, error, data } = useGetTodos();

  if (isLoading) return <>'Loading...'</>;
  if (error) return <>'An error has occurred: </>;
  const todoData = data;

  return (
    <TodoListStyled>
      <TodoForm />
      <TodoContainer>
        {todoData.map((todo: Todo) => (
          <ToDo key={todo.id} todo={todo} />
        ))}
      </TodoContainer>
    </TodoListStyled>
  );
};
