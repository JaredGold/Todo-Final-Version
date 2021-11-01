import { Todo } from "../../types";
import { useTodos } from "../../hooks/useTodos";
import { RemoveButton } from "./RemoveButton";
import { TodoWrapper } from "./TodoWrapper";
import { TodoTitle } from "./TodoTitle";
import { useState, useCallback } from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import { Checkbox } from "./Checkbox";
import _ from "lodash";

type Props = {
  todo: Todo;
};

export const ToDo = (props: Props) => {
  const { todo } = props;
  const [todoValue, setTodoValue] = useState(todo.title);
  const { updateChecked, removeTodo, updateTitle } = useTodos();

  const handleChecked = (): void => {
    updateChecked(todo.id);
  };

  const handleRemove = (): void => {
    removeTodo(todo.id);
  };

  const updateTodoTitle = useCallback(
    _.debounce((title: string) => updateTitle(todo.id, title), 1000),
    []
  );

  const handleTodoChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const input: string = event.currentTarget.value;
    setTodoValue(event.currentTarget.value);
    updateTodoTitle(input);
  };

  return (
    <TodoWrapper>
      <Checkbox
        type="checkbox"
        checked={todo.checked}
        onChange={handleChecked}
        data-testid="todo-checkbox"
      />
      <TodoTitle
        checked={todo.checked}
        value={todoValue}
        onChange={handleTodoChange}
        data-testid="todo-title"
      />
      <RemoveButton data-testid="todo-remove-button" onClick={handleRemove}>
        <IoIosRemoveCircle />
      </RemoveButton>
    </TodoWrapper>
  );
};
