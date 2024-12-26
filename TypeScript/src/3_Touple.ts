let ourTuple: [number, boolean, string]= [1,true,"A"];
ourTuple.push("A");
console.log(ourTuple);

// Named Touple
const graph: [x: number, y: number] = [55.2, 41.3];

// Touple Destructuring 
const [p, q] = graph;
console.log(p+" "+q);

// Difference:  Touple and Arrays
// Array has Fixed type and if we use Literal Type (number|string)[] then order doesnt matter 
// but in touple  let ourTuple: [number, boolean, string]= [1,true,"A"]; order matters. 

