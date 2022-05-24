var x = setTimeout(function() {
    console.log("Hello!")
}, 1000);

console.log("Clearing the Timeout: ", x);
clearTimeout(x);

// Doesn't pringt "Hello!"
// 
// Clearing the Timeout:  Timeout {
    // _called: false,
    // _idleTimeout: 1000,
    // _idlePrev: 
    //  TimersList {
    //    _idleNext: [Circular],
    //    _idlePrev: [Circular],
    //    _timer: Timer { '0': [Function: listOnTimeout], _list: [Circular] },
    //    _unrefed: false,
    //    msecs: 1000,
    //    nextTick: false },
    // _idleNext: 
    //  TimersList {
    //    _idleNext: [Circular],
    //    _idlePrev: [Circular],
    //    _timer: Timer { '0': [Function: listOnTimeout], _list: [Circular] },
    //    _unrefed: false,
    //    msecs: 1000,
    //    nextTick: false },
    // _idleStart: 61,
    // _onTimeout: [Function],
    // _timerArgs: undefined,
    // _repeat: null,
    // _destroyed: false,
    // [Symbol(asyncId)]: 6,
    // // [Symbol(triggerAsyncId)]: 1 }
  