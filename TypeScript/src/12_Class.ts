class Person4 {
    private name: string;
  
    public constructor(name: string) {
      this.name = name;
    }
  
    public getName(): string {
      return this.name;
    }
}
  
const person3 = new Person4("Arpan");
console.log(person3.getName());

// Abstract Class 
// An abstract class is a class that cannot be instantiated. It is used to define a blueprint for other classes.
// An abstract class can have abstract methods, which are methods that are declared but not implemented.

abstract class Polygon {
    public abstract getArea(): number;
  
    public toString(): string {
      return `Polygon[area=${this.getArea()}]`;
    }
  }
  
  class Rectangle1 extends Polygon {
    public constructor(protected readonly width: number, protected readonly height: number) {
      super();
    }
  
    public getArea(): number {
      return this.width * this.height;
    }
  }
  
  const myRect = new Rectangle1(10,20);
  
  console.log(myRect.getArea());

