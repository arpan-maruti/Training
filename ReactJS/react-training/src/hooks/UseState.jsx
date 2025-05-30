import { useState } from "react";
export default function UseState(){
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
  
    return (
      <div>
        <h1>useState</h1>
        <hr />
        <h1>Count: {count}</h1>
        <button onClick={increment} style={{margin:'5px'}}>increase</button>
        <button onClick={decrement}>decrease</button>
      </div>
    );
}