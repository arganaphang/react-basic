import Form from "./Form";
import TodoItem from "./TodoItem";

const App: React.FC = () => {
  // TODO: Update This
  const isError = false;
  const isLoading = false;

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
          <TodoItem todo={{ id: 1, title: "First Todo", is_done: false }} />
        </ul>
      </div>
    </div>
  );
};

export default App;
