import React, { useRef, useState } from "react";

export default function UseRef() {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);

  function handleStart() {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
    }
  }
  function handleStop() {
    clearInterval(timerRef.current);
    timerRef.current = null; 
  }

  function handleReset() {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setCount(0); 
  }
  return (
    <>
      <h1>useRef</h1>
      <hr />
      <h1> Stopwatch : {count} </h1>

      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button onClick={handleStart}>start</button>
        <button onClick={handleStop}>stop</button>
        <button onClick={handleReset}>reset</button>
      </div>
    </>
  );
}
