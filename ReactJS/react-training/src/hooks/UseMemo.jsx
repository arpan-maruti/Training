import React, { useState, useMemo, useEffect } from "react";

const FactorialCalculator = () => {
  const [number, setNumber] = useState(1);
  const [counter, setCounter] = useState(0);

  // Expensive computation function
  const factorial = (n) => {
    console.log("Calculating Factorial...");
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  };

  // Without useMemo (recomputes factorial on every render)
  // const result = factorial(number);

  const memoizedFactorial = useMemo(() => factorial(number), [number]);
  
  return (
    <div>
      <h2>
        Factorial of {number} is: {memoizedFactorial}
      </h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setCounter(counter + 1)}>
        Re-render Component
      </button>
      <p>Counter: {counter}</p>
    </div>
  );
};

export default FactorialCalculator;
