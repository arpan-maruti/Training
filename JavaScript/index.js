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

// class
class Car
{
  constructor(brand)
  {
    this.__cname=brand;
  }
  set cname(x)
  {
    this.__cname=x;
  }
  get cname()
  {
    return this.__cname;
  }
}
const myCar=new Car("Alto");
myCar.__cname="Ford";
console.log(myCar.cname);


// setInterval will call function after every interval of time 
setTimeout(timeAlert,2000);
function timeAlert()
{
  alert("FN called after 2 seconds")
}

function  myDisplayer(some)
{
  console.log(some);
}

// Promise
let myPromise=new Promise(function(myResolve,myReject){
  let x=0;
  setTimeout(
    function(){
      if(x==0)
        {
          myResolve("OK");
        }
        else
        {
          myReject("Error");
        }
    },1000
  )
})

myPromise.then(
  function(value) {
    myDisplayer(value);
  },
  function(error) {
    myDisplayer(error);
  }
)

// async/await 
async function myDisplay() {
  let myPromise = new Promise(function(resolve) {
    setTimeout(function() {resolve("I love You !!");}, 3000);
  });
  console.log(await myPromise);
}

myDisplay();

document.write(Date());

// JS HTML DOM 
function validateForm()
{
  let x=document.forms["myForm"]["num"].value;
  if(x<=0 || x>=11)
  {
    alert("num btw 1 to 10");
    return false;
  }
  else
  {
    console.log("num"+x);
  }
}

// Browser BOM 
console.log(screen.width + ":"+ screen.availWidth+ " " + screen.height+ ":"+ screen.availHeight + " "+ screen.colorDepth);

console.log(window.location.href + " "+ window.location.hostname + " "+ window.location.port);

function newDoc() {
  window.location.assign("https://www.w3schools.com");
  // window.history.back();
  // window.history.forward();
}

console.log(navigator.appCodeName);

function myFunction() {
  var txt;
  if (confirm("Press a button!")) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("confirmBtn").innerHTML = txt;
}

function promptFunction() {
  let text;
  let person = prompt("Please enter your name:", "Harry Potter");
  if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } else {
    text = "Hello " + person + "! How are you today?";
  }
  document.getElementById("promptBtn").innerHTML = text;
}

// cookie 
function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}