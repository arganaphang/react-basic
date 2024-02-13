import { cors } from "@elysiajs/cors";
import { Elysia, t } from "elysia";

type Todo = {
  id: number;
  title: string;
  is_done: boolean;
};

let todos: Todo[] = [];

const app = new Elysia()
  .use(
    cors({
      methods: "*",
    })
  )
  .get("/", () => ({
    message: "OK",
  }))
  .group("/todos", (ctx) => {
    ctx
      .get("/", () => {
        return {
          message: "get all todos",
          data: todos,
        };
      })
      .post(
        "/",
        (request) => {
          const newTodo: Todo = {
            id: Date.now(),
            title: request.body.title,
            is_done: false,
          };
          todos.unshift(newTodo);
          return {
            message: "new todo created",
          };
        },
        {
          body: t.Object({
            title: t.String(),
          }),
        }
      )
      .put(
        "/:id/toggle",
        ({ params: { id } }) => {
          todos = todos.map((todo) => {
            if (todo.id === id) {
              todo.is_done = !todo.is_done;
            }
            return todo;
          });
          return {
            message: "todo updated",
          };
        },
        {
          params: t.Object({
            id: t.Numeric(),
          }),
        }
      )
      .delete(
        "/:id",
        ({ params: { id } }) => {
          const idx = todos.findIndex((todo) => todo.id === id);
          todos.splice(idx, 1);
          return {
            message: "todo deleted",
          };
        },
        {
          params: t.Object({
            id: t.Numeric(),
          }),
        }
      );
    return ctx;
  })
  .onError(({ code }) => {
    if (code === "NOT_FOUND") {
      return { message: "route not found :(" };
    }
    if (code === "VALIDATION") {
      return { message: "failed to validate" };
    }
    if (code === "INTERNAL_SERVER_ERROR") {
      return { message: "internal server error" };
    }
  })
  .listen(8000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
