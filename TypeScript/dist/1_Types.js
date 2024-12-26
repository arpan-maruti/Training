"use strict";
let firstName = "Arpan";
let firstName1 = "Arpan";
let firstName2 = "Arpan";
const json = JSON.parse("55");
console.log(typeof json);
let u = true;
u = "string";
u.runANonExistentMethod();
console.log(Math.round(u));
let value;
value = 5;
value = "hello";
value.toFixed(2);
let value1;
value1 = 5;
value1 = "hello";
if (typeof value === "number") {
    console.log(value.toFixed(2));
}
let b = "a";
console.log(b);
let c = b;
console.log(c);
function infiniteLoop() {
    while (true) {
        console.log("A");
    }
}
let y = undefined;
console.log(typeof y);
let z = null;
console.log(typeof z);
//# sourceMappingURL=1_Types.js.map