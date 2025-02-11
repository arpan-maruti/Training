import EventEmitter from "events";

class Sales extends EventEmitter{
    constructor(){
        super();
    }
}

const myEmmitter = new Sales();

myEmmitter.on("example",()=>{
    console.log("event 1 called");
});

myEmmitter.on("example",()=>{
    console.log("event 2 called");
});

myEmmitter.on("example", val=>{
    console.log(`event 3 called ${val}`);
});

myEmmitter.emit("example", 9);