function foo() {
    this.baz = "baz";
    console.log(this.bar + ' ' + baz);
}

var bar = "bar";
var baz = new foo(); // ???
console.log(baz.baz);
// 4 thigs new keyword does
// 1. creates new empty object
// 2. new object linked to another object *
// 3. new object will become this for the function
// 4. implicitly insert "return this" if explicit return statement is missing