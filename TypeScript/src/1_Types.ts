// Explicit Type Casting 
let firstName: string = "Arpan";

// Implicit Type Casting 
let firstName1= "Arpan";


let firstName2: string = "Arpan";
// ERROR: Type 'number' is not assignable to type 'string'.
// firstName2=30;

//What type of data JSON file will return, We don't know.So TypeScript Will guess the type of data.Thats called "INFER".
const json = JSON.parse("55");
console.log(typeof json);

// TYPE : any
// disables type checking

// let u = true;
// u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
// u.runANonExistentMethod(); // Error: Property 'runANonExistentMethod' does not exist on type 'boolean'.
// console.log(Math.round(u)); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.


//but if any type used

let u: any = true;
u = "string"; 
u.runANonExistentMethod();
console.log(Math.round(u)); 


// TYPE : unknown
//DIFFERENCE: any or unknown

// any : no type-safety 
// unknown : type-safety

// Example Difference
//using any

let value: any;

value = 5;       // No error
value = "hello"; // No error
value.toFixed(2); // No error, even though `toFixed` is not valid for strings at runtime

//using unknown

let value1: unknown;

value1 = 5;       // No error
value1 = "hello"; // No error

// value1.toFixed(2); // Error: Object is of type 'unknown'

if (typeof value === "number") {
    console.log(value.toFixed(2)); // Works because we've checked the type
}

// This will give no Error because any will nnot check anything.
//But unknown is only assignable to unknown or any type.
let b: any=  "a"; 
console.log(b); 
let c: number= b; 
console.log(c);

// TYPE : never
function infiniteLoop(): never {
    while (true) {
        // Endless loop, function never completes
        console.log("A");
    }
    // return  // never type will give error when we return anything;
}
// infiniteLoop();

// TYPE : undefined amd null
let y: undefined = undefined;
console.log(typeof y); // undefined

let z: null = null;
console.log(typeof z); // object
