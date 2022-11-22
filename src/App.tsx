import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <div className="flex gap-8 mb-8">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="w-24 h-24" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src="/react.svg" className="w-24 h-24" alt="React logo" />
        </a>
      </div>
      <h1 className="mb-4">Vite + React</h1>
      <div className="p-2 flex flex-col items-center gap-8">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-8 py-2 rounded-md bg-slate-200"
        >
          count is {count}
        </button>
        <p>
          Edit{" "}
          <code className="px-4 py-2 rounded-md bg-slate-100">src/App.tsx</code>{" "}
          and save to test HMR
        </p>
      </div>
      <p className="text-slate-600">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
