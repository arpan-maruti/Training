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

//Built in JS Constructors
// new Object()    A new Object object
// new Array()     A new Array object
// new Map()       A new Map object
// new Set()       A new Set object
// new Date()      A new Date object
// new RegExp()    A new RegExp object
// new Function()  A new Function object


