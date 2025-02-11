import fs from "fs";
const __filename= './test.txt';
// Phase 1: Expired Timer Callback
setTimeout(() => {
    console.log('Expired Timer Callback (setTimeout)');
}, 0);

// Phase 2: I/O Polling & Callbacks
fs.readFile(__filename, () => {
    console.log('I/O Polling & Callback (fs.readFile)');

    // Phase 3: setImmediate Callback (executes after I/O)
    setImmediate(() => {
        console.log('setImmediate Callback');
    });

    // Nested setTimeout inside I/O (executes in the next event loop cycle)
    setTimeout(() => {
        console.log('setTimeout inside I/O');
    }, 0);
});

// Phase 4: Close Callbacks (e.g., closing a stream)
const readStream = fs.createReadStream(__filename);
readStream.close();
readStream.on('close', () => {
    console.log('Close Callback (Stream closed)');
});

console.log('Synchronous Code Execution');


// OUTPUT: 
// Synchronous Code Execution
// Expired Timer Callback (setTimeout)
// I/O Polling & Callback (fs.readFile)
// setImmediate Callback
// setTimeout inside I/O
// Close Callback (Stream closed)