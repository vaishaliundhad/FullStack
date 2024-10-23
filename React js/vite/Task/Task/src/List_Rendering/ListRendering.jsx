import React from "react";

const ListRendering = () => {
  // Example array of items
  const fruits = ["Apple", "Banana", "Orange", "Mango"];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li> // Always use a unique key prop for each item
      ))}
    </ul>
  );
};

export default ListRendering;
