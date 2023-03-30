import React from "react";
export default function Test() {
  const [number, setNumber] = React.useState(1);
  function increment() {
    setNumber((prevNumber) => prevNumber + 1);
  }
  return (
    <>
      <h1 data-testid="currentNumber"> {number} </h1> 
      <button data-testid="add-one" onClick={increment}>
          Add one 
      </button>
    </>
  );
}
