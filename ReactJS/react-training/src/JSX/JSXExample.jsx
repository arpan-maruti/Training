export default function JSXExample() {
  const name = 'John';
  const age = 30;
  
  const x = 10;
  const y = 5;
  
  const greet = (name) => `Hello, ${name}!`;

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

  const fruits = ['Apple', 'Banana', 'Cherry'];


  return (
    <div>
      <h1>JSX Example with Curly Braces</h1>

      <p>Name: {name?name:"no name"}</p>
      <p>Age: {age}</p>

      <p>x + y = {x + y}</p>

      <p>{greet(name)}</p>

      <p>Person's Name: {person.firstName} {person.lastName}</p>
      <p>Person's Age: {person.age}</p>

      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

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
