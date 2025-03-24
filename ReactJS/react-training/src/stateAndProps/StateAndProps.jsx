import { useState } from "react";
import Counter from './Counter';
import Form from './Form';
export default function State() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);


  const handleCount = (newCount) => {
    setCount(newCount);
  };

  return (
    <>
      {/* passing jsx and styles */}
      <Counter handleCount={handleCount} count={count} color="green">
        <h1> passing jsx with props </h1>
      </Counter> 
      <hr />
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle ? <h1>Hide & Show</h1> : null}
      <Form />
      <hr />
    </>
  );
}
