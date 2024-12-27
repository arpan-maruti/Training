function multiply(a: number, b: number) {
    return a * b;
}
console.log(multiply(5, 2)); // 10

// Optional parameter and Default parameter
function add(a: number, b: number, c?: number, d: number=10) {
    return a + b + d +  (c || 0);
}
console.log(add(5, 2)); // 17

// Rest parameter
function addRest(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}
  
console.log(addRest(10,10,10,10,10)); // 50
