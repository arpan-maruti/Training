"use strict";
var _a;
let user = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Springfield",
        zip: "12345"
    }
};
console.log((_a = user.address) === null || _a === void 0 ? void 0 : _a.city);
function printMileage(mileage) {
    console.log(`Mileage: ${mileage !== null && mileage !== void 0 ? mileage : 'Not Available'}`);
}
printMileage(null);
printMileage(0);
printMileage(undefined);
function getValue() {
    return 'hello';
}
let value3 = getValue();
console.log('value length: ' + value3.length);
let arr = [1, 2, 3];
console.log(arr[0]);
console.log(arr[3]);
//# sourceMappingURL=16_Null.js.map