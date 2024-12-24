"use strict";
let age = 20;
if (age > 10)
    age += 10;
console.log(age);
let a = [];
let user = [1, "Arpan"];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
let mySize = Size.Medium;
console.log(mySize);
function calSum(a, b = 5) {
    return a + b;
}
console.log(calSum(2, 7));
let Person = { name: "Arpan", age: 20, retire: (date) => {
        console.log(date);
    }
};
console.log(Person);
//# sourceMappingURL=index.js.map