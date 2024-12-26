"use strict";
function makePair(x, y) {
    return [x, y];
}
console.log(makePair("A", 1));
class NamedValue {
    constructor(name) {
        this.name = name;
    }
    setValue(value) {
        this._value = value;
    }
    getValue() {
        return this._value;
    }
    toString() {
        return `${this.name}: ${this._value}`;
    }
}
let value2 = new NamedValue('myNumber');
value2.setValue(10);
console.log(value2.toString());
//# sourceMappingURL=13_Generics.js.map