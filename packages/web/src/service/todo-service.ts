import { addTodo, deleteTodo, getTodos, toggleTodo } from "@/api/todo-api";
import { queryClient } from "@/helper/query";
import { useMutation, useQuery } from "@tanstack/react-query";

const QUERY_KEY = ["todos"];

export const useTodos = () => {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: getTodos,
  });
};

export const useAddTodo = () => {
  return useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEY });
    },
  });
};

export const useToggleTodo = () => {
  return useMutation({
    mutationFn: toggleTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEY });
    },
  });
};

export const useDeleteTodo = () => {
  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEY });
    },
  });
};
