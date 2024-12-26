"use strict";
function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 2));
function add(a, b, c, d = 10) {
    return a + b + d + (c || 0);
}
console.log(add(5, 2));
function addRest(a, b, ...rest) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}
console.log(addRest(10, 10, 10, 10, 10));
//# sourceMappingURL=10_Functions.js.map