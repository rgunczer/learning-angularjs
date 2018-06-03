function log(msg) {
    console.log(msg);
}

function log(msg) {
    console.log.apply(console, arguments);
}

function log(msg) {
    var args = Array.prototype.slice.call(arguments);
    args.unshift('(app)');
    console.log.apply(console, args);
}

log('joel');

var User = {
    count: 1,
    getCount: function() {
        return this.count;
    }
}

console.log(User.getCount()); // 1

var func = User.getCount;
console.log(func()); // undefined


var func2 = User.getCount.bind(User);
console.log(func2()); // 1
