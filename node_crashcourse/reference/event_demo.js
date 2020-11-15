const eventEmitter = require("events");

// create class 
class MyEmitter extends eventEmitter { }

// init object
myEmitter = new MyEmitter();

// event listener
myEmitter.on('event', () => console.log('event fired..'));

// init event
myEmitter.emit('event');
