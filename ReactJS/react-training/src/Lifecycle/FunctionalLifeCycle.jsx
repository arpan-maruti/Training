import React, { useState, useEffect } from 'react';

const FunctionalLifecycle = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log('Component mounted');
    const timer = setTimeout(() => {
      setData('Fetched Data');
    }, 1000);

    return () => {
      console.log('Component will unmount');
      clearTimeout(timer); 
    };
  }, []);

  useEffect(() => {
    console.log('Component updated');
  }, [count]); 

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <p>Data: {data ? data : 'Loading...'}</p>
    </div>
  );
};

export default FunctionalLifecycle;
