import { useQuery, useMutation, useQueryClient } from 'react-query';
import { todoApi } from '../config/todoApi';
import { TodoBackendEndpoints } from '../constants';
import { Todo } from '../types';

export const useGetTodos = () => {
  return useQuery('getTodos', async () => {
    const { data } = await todoApi.get(TodoBackendEndpoints.GetTodos);
    return data;
  });
};

export const useAddTodo = () => {
  const queryClient = useQueryClient();

  return useMutation(
    'addTodo',
    (todoTitle: string) => {
      return todoApi.post(TodoBackendEndpoints.AddTodo, {
        title: todoTitle,
      });
    },
    {
      onMutate: async (todoTitle: string) => {
        await queryClient.cancelQueries('getTodos');
        const previousTodos: Array<Todo> =
          queryClient.getQueryData('getTodos') || [];
        queryClient.setQueryData('getTodos', (oldTodos: Array<Todo> = []) => [
          ...oldTodos,
          {
            id: oldTodos[oldTodos.length - 1].id + 1,
            title: todoTitle,
            checked: false,
          },
        ]);
        return { previousTodos };
      },
      onError: (
        err,
        todoTitle: string,
        context: { previousTodos: Array<Todo> } | undefined
      ) => {
        queryClient.setQueryData('getTodos', context?.previousTodos || []);
      },
      onSettled: () => {
        queryClient.invalidateQueries('getTodos');
      },
    }
  );
};

export const useCheckTodo = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (id: number) => {
      return todoApi.put(TodoBackendEndpoints.CheckTodo + id);
    },
    {
      onMutate: async (id: number) => {
        await queryClient.cancelQueries('getTodos');
        const previousTodos: Array<Todo> =
          queryClient.getQueryData('getTodos') || [];

        queryClient.setQueryData('getTodos', (oldTodos: Array<Todo> = []) => {
          return oldTodos.map((t: Todo) => {
            if (t.id === id) {
              t.checked = !t.checked;
            }
            return t;
          });
        });
        return { previousTodos };
      },
      onError: (
        err,
        id: number,
        context: { previousTodos: Array<Todo> } | undefined
      ) => {
        queryClient.setQueryData('getTodos', context?.previousTodos || []);
      },
      onSettled: () => {
        queryClient.invalidateQueries('getTodos');
      },
    }
  );
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (todoId: number) => {
      return todoApi.delete(TodoBackendEndpoints.DeleteTodo + todoId);
    },
    {
      onMutate: async (todoId: number) => {
        await queryClient.cancelQueries('getTodos');
        const previousTodos: Array<Todo> =
          queryClient.getQueryData('getTodos') || [];

        queryClient.setQueryData('getTodos', (oldTodos: Array<Todo> = []) => {
          return oldTodos.filter((t: Todo) => {
            return t.id !== todoId;
          });
        });
        return { previousTodos };
      },
      onError: (
        err,
        id: number,
        context: { previousTodos: Array<Todo> } | undefined
      ) => {
        queryClient.setQueryData('getTodos', context?.previousTodos || []);
      },
      onSettled: () => {
        queryClient.invalidateQueries('getTodos');
      },
    }
  );
};

type UpdateTodoMutation = {
  id: number;
  newTitle: string;
};

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (todo: UpdateTodoMutation) => {
      return todoApi.put(TodoBackendEndpoints.UpdateTodo + todo.id, {
        title: todo.newTitle,
      });
    },
    {
      onMutate: async (todo: UpdateTodoMutation) => {
        await queryClient.cancelQueries('getTodos');
        const previousTodos: Array<Todo> =
          queryClient.getQueryData('getTodos') || [];

        queryClient.setQueryData('getTodos', (oldTodos: Array<Todo> = []) => {
          return oldTodos.map((t: Todo) => {
            if (t.id === todo.id) {
              t.title = todo.newTitle;
            }
            return t;
          });
        });
        return { previousTodos };
      },
      onError: (
        err,
        todo: UpdateTodoMutation,
        context: { previousTodos: Array<Todo> } | undefined
      ) => {
        queryClient.setQueryData('getTodos', context?.previousTodos || []);
      },
      onSettled: () => {
        queryClient.invalidateQueries('getTodos');
      },
    }
  );
};
