// function
function showDate()
{
    document.getElementById("date").innerHTML=Date();
}

// array
const cars = ["Saab", "Volvo", "BMW"];

//3 Ways to make object

//1. pass properties in { }
const person = {
    firstName: "Arpan", 
    lastName: "Rupareliya", 
    age:20
}

//2. Create empty object and pass after that
const person1={};

person1.firstName = "Arpan";
person1.lastName = "Rupareliya";
person1.age = 20;

//3.Using new Keyword
const person2 = new Object();

person2.firstName = "Arpan";
person2.lastName = "Rupareliya";
person2.age = 20;

// We can pass function in object using this keyword
const person3 = {
    firstName: "Arpan",
    lastName : "Rupareliya",
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
};
let name = person3.fullName();
let name1 = person3.fullName;

//Accessing JS Properties
let age = person.age;
let age1 = person1["age"];
let x = "age";
let age2 = person2[x]

//Nested Object
const myObj = {
    name:"John",
    age:30,
    myCars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }

//Access Nested Property
let secondCar = myObj.myCars.car2;
let secondCar1 = myObj.myCars["car2"];
let p1 = "myCars";
let p2 = "car2";
let secondCar2 = myObj[p1][p2];

//5 ways to display object

//1. by property name
document.getElementById("objDisp1").innerHTML += person.firstName+" "+person.lastName+" "+person.age;

//2. by loop
let text= "";
for(let x in person)
{
    document.getElementById("objDisp2").innerHTML += person[x]+" ";
}

//3. Object.values()
const myArray = Object.values(person);
document.getElementById("objDisp3").innerHTML+= myArray;

//4. Object.entries()
let text1 = "";
for (let [p, value] of Object.entries(person)) {
  text1 += p + ": " + value + "<br>";
}
document.getElementById("objDisp4").innerHTML+= text1;

//5.JSON.stringify()
let myString=JSON.stringify(person)
document.getElementById("objDisp5").innerHTML+= myString;


//Constructor Function
function Person4(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
  
}

const myData = new Person4("John", "Doe", 50);

//For adding property in constructor we need to use Prototype
Person4.prototype.nationality = "Indian";

//Variables in String
let firstName = "John";
let lastName = "Doe";

let varSubst = `Welcome ${firstName}, ${lastName}!`;

//Arrays
const carArray = [
  "Saab",
  "Volvo",
  "BMW"
];

const carArray1 = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";

const carArray2 = new Array("Saab", "Volvo", "BMW");

const dateArray=["2015-03-25","2015-04-25","2014-03-25","2015-03-21","2015-12-25"];
console.log(dateArray.sort(function(a,b){return (Date.parse(new Date(a))-Date.parse(new Date(b)))}));

const numbers=[2,1,2,2,1];
let sum=numbers.reduce(sumFunction);
function sumFunction(total, value)
{
  return total+value;
}
console.log(sum);

// with method
const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");
console.log(myMonths);

// spread operator
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);

// switch case
switch (new Date().getDay()) {
  default:
    console.log("Looking forward to the Weekend");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
  case 0:
    console.log("Today is Sunday");
}

const numbers1 = [45, 4, 9, 16, 25];

// in/of
let txt = "";
for (let x in numbers1) {
  txt += numbers1[x];
}
console.log(txt);

const numbers2 = [45, 4, 9, 16, 25];

let txt1 = "";
for (let x of numbers2) {
  txt1 += x;
}
console.log(txt1);

//iterable
function myNumbers() {
  let n = 0;
  return {
    next: function() {
      n += 10;
      return {value:n, done:false};
    }
  };
}

const n=myNumbers();
console.log(n.next());
console.log(n.next());
console.log(n.next());
console.log(n.next());

myNumbers1 = {};
myNumbers1[Symbol.iterator] = function() {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {done = true}
      return {value:n, done:done};
    }
  };
}

// Create an Iterator
let iterator = myNumbers1[Symbol.iterator]();

let text2 = ""
while (true) {
  const result = iterator.next();
  if (result.done) break;
  text2 += result.value +" ";
}
console.log(text2);

const letters=new Set();
letters.add("a");
letters.add("b");
letters.add("c");
console.log(letters);

console.log(letters.has("d"));
for (const x of letters.keys()) {
  console.log(x);
}
for (const x of letters.entries()) {
  console.log(x);
}

// map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

for(const x of fruits.keys())
{
  console.log(x+fruits.get(x));
}

for(const x of fruits.entries())
{
  console.log(x);
}

// Callback function
const fruits1 = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];
function printFruit({quantity}){
  return quantity>200?"ok":"low";
}
const result = Map.groupBy(fruits1, printFruit);

for(let x of result.get("ok"))
{
  console.log(x.name+" "+x.quantity);
}

// object destructuring
const objDest = {
  firstName1: "John",
  lastName1: "Doe",
  age: 50
};

let {firstName1: name2,lastName1, country="india"}=objDest;
console.log(name2+" "+lastName1+" "+country);

// Array Destructuring
const fruitsArr = ["Bananas", "Oranges", "Apples", "Mangos"];

// Destructuring with Skipping
let [fruit1,,,fruit2] = fruitsArr;
console.log(fruit1+" "+fruit2);

//search()
let text3 = "Visit W3Schools!";
let n1 = text3.search("W3Schools");
console.log(n1);

//replace()
let text4 = "Visit W3Schools!, W3Schools";
let n2 = text4.replace("W3Schools","Arpan");
console.log(n2);

//replaceAll()
let text5 = "Visit W3Schools!, W3Schools";
let n3 = text5.replaceAll("W3Schools","Arpan");
console.log(n3);

// class 
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age()
  {
    const date=new Date();
    return date.getFullYear()-this.year;
  }
}
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

console.log(myCar1.age());

// Counter By Object 
// Define object
const obj = {counter:0};

// Define setters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (i) {this.counter -= i;}
});

// Play with the counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;

console.log(obj.counter);

function myDisplayer(some) {
  console.log(some);
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);


