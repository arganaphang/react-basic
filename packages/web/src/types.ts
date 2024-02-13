export type Todo = {
  id: number;
  title: string;
  is_done: boolean;
};

export type BaseResponse<T> = {
  message: string;
  data: T | undefined;
};
