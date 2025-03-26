import React, { useId } from "react";

function FormField({ label, type }) {
  const id = useId(); 

  console.log(`Generated ID for ${label}:`, id);

  return (
    <div>
      <p>ID: {id}</p> 
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} />
    </div>
  );
}

export default function UseId() {
  return (
    <>
      <h1>useId</h1>
      <hr />
      <FormField label="Name:" type="text" />
      <FormField label="Email:" type="email" />
    </>
  );
}
