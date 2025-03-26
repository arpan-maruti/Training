import React, { useState, useCallback } from "react";

const Button = ({ handleClick }) => {
  console.log("Button component re-rendered");
  return <button onClick={handleClick}>Click Me</button>;
};

const Counter = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <Button handleClick={increment} />
      <button onClick={() => setOtherState(!otherState)}>Re-render Parent</button>
    </div>
  );
};

export default Counter;
