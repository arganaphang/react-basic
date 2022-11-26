import http from "~/utils/http";
import type { AxiosResponse } from "axios";
import type { Todo } from "~/types/todo";

export async function getAllTodo(): Promise<Todo[]> {
  return http.get("/todos").then((res: AxiosResponse<Todo[]>) => res.data);
}
