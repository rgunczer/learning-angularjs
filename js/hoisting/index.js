// original
var a = b();
var c = d();
a;
c;

function b() {
    return c;
}

var d = function() {
    return b();
};


// hoisted
function b() {
    return c;
}
var a;
var c;
var d;
a = b();
c = d();
a;
c;
d = function() {
    return b();
}


// hoisting functions first
foo(); // "foo"

var foo = 2;

function foo() {
    console.log("bar");
}

function foo() {
    console.log("foo");
}