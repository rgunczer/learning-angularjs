function* gen() {
    console.log('Hello');
    yield null;
    console.log('World');
}

var it = gen();
it.next();
it.next();

function coroutine(g) {
    var it = g();
    return function() {
        return it.next.apply(it, arguments);
    }
}

var run = coroutine(function* () {
    var x = 1 + (yield null);
    var y = 1 + (yield null);
    yield (x + y);
});

run();
run(10);
console.log('boo: ' + run(30).value);


function getData(d) {
    setTimeout(function() { run(d); }, 1000);
}

var run = coroutine(function* () {
    var x = 1 + (yield getData(10));
    var y = 1 + (yield getData(30));
    var answer = (yield getData("booo: " + (x + y)));
    console.log(answer);
});

run();