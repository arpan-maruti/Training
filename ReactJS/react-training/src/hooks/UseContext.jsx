import { useContext, createContext, useState } from "react";

// Create Context
const UserContext = createContext();

export default function UseContext() {
  let name = "Arpan";

  console.log("UseContext (A) Rendered");

  return (
    <>
      <h1>useContext Example</h1>
      <hr />
      <UserContext.Provider value={name}>
        <A />
        <button
          onClick={() => {
            name = name + "hi";
            console.log(name);
          }}
        >
          Change Name
        </button>
      </UserContext.Provider>
    </>
  );
}

function A() {
  console.log("Component A Rendered");
  return <B />;
}

function B() {
  console.log("Component B Rendered");
  return <C />;
}

function C() {
  const name = useContext(UserContext); 
  console.log("Component C Rendered");

  return <h2>User Name: {name}</h2>;
}
