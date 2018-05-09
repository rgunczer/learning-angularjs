var events = require('events');
var eventEmitter = new events.EventEmitter();

var ringbell = function() {
    console.log('ring ring ring');
};

eventEmitter.on('doorOpen', ringbell);
eventEmitter.on('bellrings', function(msg) {
    console.log(msg);
});

eventEmitter.emit('doorOpen');
eventEmitter.emit('bellrings', 'Welcome');