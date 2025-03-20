import { useState } from "react";
import Counter from './Counter';

export default function State() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);


  const handleCount = (newCount) => {
    setCount(newCount);
  };

  return (
    <>
      <Counter handleCount={handleCount} count={count} /> 
      <hr />
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle ? <h1>Hide & Show</h1> : null}
      <hr />
    </>
  );
}
