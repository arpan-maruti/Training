
type HexColor = `#${string}`;

// Usage:
let myColor:HexColor = "#0000FF";
console.log(myColor);

//Example of Index Signature Labels

type DynamicObject = { [key in `dynamic_${string}`]: string; };
let obj: DynamicObject = { dynamic_key: "value" }; 
console.log(obj);
