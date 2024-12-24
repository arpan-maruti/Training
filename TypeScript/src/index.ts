let age:number = 20;
if(age>10)
    age+=10;
console.log(age);

//any type
let a=[];
let user: [number, string] = [1,"Arpan"];

//enum
enum Size { Small=1, Medium, Large};
let mySize: Size= Size.Medium;
console.log(mySize);

//function
function calSum(a:number, b=5):number
{
    return a+b;
} 
console.log(calSum(2,7));

//Object
//readonly prevents to change the data of the object property
type Person = 
{
    name: string,
    age: number,
    retire: (date:Date) =>void;
}

let person:Person= {
    name:"Arpan",
    age:20,
    retire: (date:Date) =>
    {
        console.log(date);
    }
};
console.log(person);

//Literal type
type Quantity = 50 | 100;
let quantity:Quantity=50;