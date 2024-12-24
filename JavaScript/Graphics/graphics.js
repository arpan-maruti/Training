const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
canvas.height = canvas.width;
ctx.transform(1, 0, 0, -1, 0, canvas.height)

let xMax = canvas.height;
let yMax = canvas.width;
let slope = 1.2;
let intercept = 70;

const xArray = [50,60,70,80,90,100,110,120,130,140,150];
const yArray = [7,8,8,9,9,9,10,11,14,14,15];

ctx.fillStyle = "red";
for (let i = 0; i <xArray.length-1; i++) {
let x = xArray[i]*xMax/150;
let y = yArray[i]*yMax/15;
ctx.beginPath();
ctx.ellipse(x, y, 3, 3, 0, 0, Math.PI * 2);
ctx.fill();
}

ctx.moveTo(0, intercept);
ctx.lineTo(xMax, f(xMax));
ctx.strokeStyle = "black";
ctx.stroke();

function f(x) {
return x * slope + intercept;
}

// const xArray1 = ["Italy", "France", "Spain", "USA", "Argentina"];
// const yArray1 = [55, 49, 44, 24, 15];

// const data = [{
//   x:xArray1,
//   y:yArray1,
//   type:"bar",
//   orientation:"v",
//   marker: {color:"rgba(0,0,255,0.6)"}
// }];

// const layout = {title:"World Wide Wine Production"};

// Plotly.newPlot("myPlot", data, layout);