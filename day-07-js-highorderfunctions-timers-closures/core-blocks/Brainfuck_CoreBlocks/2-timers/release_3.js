console.log("first");
setTimeout(function(){
    console.log("second");
},0);
console.log("third");

// first
// third
// second

// A few useful facts might help clarify what's happening:

// 1. JavaScript is single-threaded. Asynchronous callbacks are assigned to a message 
//    placed in a message queue.
// 2. When no code is currently executing, the event loop polls the message queue, 
//    requesting the next message in line to be processed (executed).
// 3. setTimeout adds a message (with the callback provided) to the end of this queue 
//    after the specified delay has elapsed.
//    (Note: this means the delay in a setTimeout call is not a sure thing; it is the 
//    minimum delay before the callback is executed. The actual time taken depends on how long it takes to process any messages ahead of it in the queue.)

// So what happens if the delay is set to 0? A new message is added to the queue 
// immediately, and will be processed when the currently executing code is finished and 
// any previously-added messages have been processed.

// Source: https://stackoverflow.com/questions/33955650/what-is-settimeout-doing-when-set-to-0-milliseconds/33955673