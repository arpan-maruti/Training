"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    toString() {
        return `Rectangle[width=${this.width}, height=${this.height}]`;
    }
}
class Square extends Rectangle {
    constructor(width) {
        super(width, width);
    }
    toString() {
        return `Square[width=${this.width}]`;
    }
}
const mySq = new Square(20);
console.log(mySq.toString());
//# sourceMappingURL=7_Interfaces.js.map