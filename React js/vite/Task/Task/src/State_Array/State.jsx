import React, { useState } from "react";

const State = () => {
  // Initialize the state with an empty array
  const [arrays, setArray] = useState([]);

  const addarray = () => {
    const newArray = prompt("Enter a new Array:");
    if (newArray) {
      // Add the new todo to the existing array immutably
      setArray([...arrays, newArray]);
    }
  };

  return (
    <div>
      <h1 className="py-4 bg-orange-700 text-2xl text-white">State With Array</h1>
      <ul>
        {arrays.map((array, index) => (
          <li key={index}>{array}</li>
        ))}
      </ul>
      <button onClick={addarray} className="border px-4 py-2 bg-orange-600 rounded-md mt-4 text-white">Add Todo</button>
    </div>
  );
};

export default State;
