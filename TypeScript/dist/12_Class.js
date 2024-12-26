"use strict";
class Person4 {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const person3 = new Person4("Arpan");
console.log(person3.getName());
class Polygon {
    toString() {
        return `Polygon[area=${this.getArea()}]`;
    }
}
class Rectangle1 extends Polygon {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const myRect = new Rectangle1(10, 20);
console.log(myRect.getArea());
//# sourceMappingURL=12_Class.js.map