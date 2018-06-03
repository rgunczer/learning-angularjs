function foo() {
    var bar = "bar";

    return function() {
        console.log(bar);
    };
}

function bam() {
    foo()();
}

bam();


function foo1() {
    var bar = "bar";

    setTimeout(function() {
        console.log(bar);
    }, 1000);
}

foo1();


var oo = (function() {
    var o = { bar: "bar" };
    return { obj: o };
})();

console.log(oo.obj.bar); // "bar"