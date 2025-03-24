export default function JSXExample() {
  // Variables
  const name = 'John';
  const age = 30;
  
  // Arithmetic operation
  const x = 10;
  const y = 5;
  
  // Function
  const greet = (name) => `Hello, ${name}!`;

  // Object
  const person = {
    firstName: 'Arpan',
    lastName: 'Rupareliya',
    age: 20,
  };

  function callFn(){
    alert("hello2");
  }

  const callFnWithParam = (name)=>{
    alert(name);
  }

  // Array
  const fruits = ['Apple', 'Banana', 'Cherry'];


  return (
    <div>
      <h1>JSX Example with Curly Braces</h1>

      {/* 1. Displaying variables */}
      <p>Name: {name?name:"no name"}</p>
      <p>Age: {age}</p>

      {/* 2. Arithmetic operation */}
      <p>x + y = {x + y}</p>

      {/* 3. Calling a function*/}
      <p>{greet(name)}</p>

      {/* 4. Displaying object properties inside JSX */}
      <p>Person's Name: {person.firstName} {person.lastName}</p>
      <p>Person's Age: {person.age}</p>

      {/* 5. Displaying an array */}
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      {/* 6. Displaying an image */}
      <img 
        src="https://placehold.co/600x400" 
        alt="Placeholder"
        style={{ width: '150px', height: '150px' }}
      />
      <br />
      <hr />
     
      Event Handler Function: <button onClick={callFn}>Click</button>
      <br />
      Event Handler Function With Parameters: <button onClick={()=>callFnWithParam("hello1")}>Click</button>
    </div>
  );
}
