import Form from "./Form";
import TodoItem from "./TodoItem";
import { useTodos } from "@/service/todo-service";

const App: React.FC = () => {
  const { data: todos, isLoading, isError } = useTodos();

  if (isError) {
    return (
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <h1>Something went wrong</h1>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <h1>Loading . . .</h1>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <div className="h-96 w-[600px] flex flex-col">
        <Form />
        <ul className="mt-4 flex-1 overflow-y-auto flex flex-col gap-2">
          {todos && todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
        </ul>
      </div>
    </div>
  );
};

export default App;
