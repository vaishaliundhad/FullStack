import React, { useState } from "react";

const Counter = () => {
  // Initialize state with an initial value of 0
  const [count, setCount] = useState(0);

  // Increment the count using previous state
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement the count using previous state
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="items-end">
      <h1 className="text-xl border bg-cyan-600 py-4 text-white">Counter: {count}</h1>
      <button onClick={increment} className="py-2 px-4 border bg-cyan-700 rounded-full text-white mt-4 mr-2">Increment</button>
      <button onClick={decrement} className="py-2 px-4 border bg-cyan-700 rounded-full text-white">Decrement</button>
    </div>
  );
};

export default Counter;
