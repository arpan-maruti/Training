//Optional Chaining is a JavaScript feature that works well with TypeScript's null handling. 
// Example of optional Chaining : The ?. operator is used to access properties of an object that may be undefined or null.

let user = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Springfield",
        zip: "12345"
    }
};
console.log(user.address?.city); // Springfield

// Example of Nullish Coalescing : The ?? operator is used to provide a default value for null or undefined values.
function printMileage(mileage: number | null | undefined) {
    console.log(`Mileage: ${mileage ?? 'Not Available'}`);
}
  
printMileage(null); // Prints 'Mileage: Not Available'
printMileage(0); // Prints 'Mileage: 0'
printMileage(undefined); // Prints 'Mileage: Not Available'

// Example of Null Assertion : The ! operator is used to tell TypeScript that a value is not null or undefined.
function getValue(): string | undefined {
    return 'hello';
  }
  let value3 = getValue();
  console.log('value length: ' + value3!.length);
  

//Example of Array bounds handling : TypeScript will not throw an error if you try to access an index that is out of bounds.
let arr = [1, 2, 3]; 
console.log(arr[0]); // 1
console.log(arr[3]); // undefined