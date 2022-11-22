import React from "react";

const App: React.FC = () => {
  const [count, setCount] = React.useState<number>(0);

  return (
    <div className="flex gap-2">
      <button
        className="px-4 border"
        onClick={() => setCount((prev) => prev - 1)}
      >
        {" "}
        -{" "}
      </button>
      <p>[Pure]Counter {count}</p>
      <button
        className="px-4 border"
        onClick={() => setCount((prev) => prev + 1)}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
};
export default App;
