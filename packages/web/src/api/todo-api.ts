import client from "@/helper/http";
import { BaseResponse, Todo } from "@/types";

export const getTodos = async () => {
  const { data } = await client.get<BaseResponse<Todo[]>>("/todos");
  return data.data;
};

export const addTodo = async ({ title }: { title: string }) => {
  const { data } = await client.post<BaseResponse<unknown>>("/todos", {
    title,
  });
  return data;
};

export const toggleTodo = async ({ id }: { id: number }) => {
  const { data } = await client.put<BaseResponse<unknown>>(
    `/todos/${id}/toggle`
  );
  return data;
};

export const deleteTodo = async ({ id }: { id: number }) => {
  const { data } = await client.delete<BaseResponse<unknown>>(`/todos/${id}`);
  return data;
};
