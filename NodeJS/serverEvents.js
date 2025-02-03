import { EventEmitter } from "events";
const myEmitter = new EventEmitter();

function greetHandler(name) {
  console.log("Hello World " +name);
}

function goodbyeHandler(name) {
  console.log("Goodbye World " + name);
}

//Register Event Listeners
myEmitter.on("greet", greetHandler);
myEmitter.on("goodbye", goodbyeHandler);

//Emit Events
myEmitter.emit("greet","Arpan"); //Output: Hello World Arpan
myEmitter.emit("goodbye","Arpan"); //Output: Goodbye World Arpan

//Error Event
myEmitter.on("error", (err) => {
  console.error("Error Occured : "+err);
});

//Simulate Error
myEmitter.emit("error", new Error("Error Occured")); //Output: Error Occured : Error: Error Occured
