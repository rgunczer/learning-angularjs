function foo(){
    function bar() {
        return 3;
    }
    return bar();
    function bar() {
        return 8;
    }
}
console.log(foo()); // 8

function foo1(){
    var bar = function() {
        return 3;
    };
    return bar();
    var bar = function() {
        return 8;
    };
}
console.log(foo1()); // 3