import React, { useReducer } from "react";

const initialState = 0;
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      default:
        return state;
    }
  };
export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <>
      <h1> useReducer</h1>
      <hr />
      <h1>Count: {state}</h1>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button onClick={() => dispatch({type:"increment"})}>increment</button>
        <button onClick={() => dispatch({type:"decrement"})}>decrement</button>
      </div>
    </>
  );
}
