function something() {
    this.hello = "hello";
    console.log(this.hello, this.who);
}

var who = "global", foobar, bazbam,
    obj1 = { who: "obj1", something: something },
    obj2 = { who: "obj2" };

something(); // "hello" "global"
console.log(hello); // "hello" <-- OOPS!!!

obj1.something(); // "hello" "obj1"
console.log(obj1.hello); // "hello"

obj1.something.call(obj2); // "hello" "obj2"
console.log(obj2.hello); // "hello"

foobar = something.bind(obj2);
foobar(); // "hello" "obj2"
foobar.call(obj1); // "hello" "obj2"

bazbam = new something(); // "hello" "undefined"
console.log(bazbam.hello); // "hello"

bazbam = new obj1.something(); // "hello" "undefined"
bazbam = new foobar(); // "hello" "undefined"


// questions: this determination
// 1. was the function called with "new" keyword
// 2. was the function called with "call" or "apply" specifying an explicit this?
// 3. was the function called via a containing/owning object (context) ?
// 4. DEFAULT: global object (except strict mode)
