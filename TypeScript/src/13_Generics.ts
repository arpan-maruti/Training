//Generic Function
function makePair<S,T>(x:S,  y:T): [S,T]{
    return [x,y];
}
console.log(makePair<string, number>("A",1));

//Generic Class
class NamedValue<T> {
    private _value: T | undefined;
  
    constructor(private name: string) {}
  
    public setValue(value: T) {
      this._value = value;
    }
  
    public getValue(): T | undefined {
      return this._value;
    }
  
    public toString(): string {
      return `${this.name}: ${this._value}`;
    }
}
  
let value2 = new NamedValue<number>('myNumber');
value2.setValue(10);
console.log(value2.toString()); // myNumber: 10
