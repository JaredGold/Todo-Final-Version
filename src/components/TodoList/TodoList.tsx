import TodoForm from "../TodoForm";
import { ToDo } from "../ToDo";
import { Todo } from "../../types";
import { useTodos } from "../../hooks/useTodos";
import { TodoContainer } from "./TodoContainer";
import { TodoListStyled } from "./TodoListStyled";

export const TodoList = () => {
  const { todoState } = useTodos();

  return (
    <TodoListStyled>
      <TodoForm />
      <TodoContainer>
        {todoState.map((todo: Todo) =>
          todo.removed ? null : <ToDo key={todo.id} todo={todo} />
        )}
      </TodoContainer>
    </TodoListStyled>
  );
};
