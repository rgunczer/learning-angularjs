
/*jshint esversion: 6 */

function Person(name) {
    this.name = name;
}

// this context is lost in setTimeout's callback
// Person.prototype.sayNameTimed = function() {
//     setTimeout(function() {
//         console.log(`My name is ${this.name}`);
//     }, 1000);
// }

// workaround 1 using self
// Person.prototype.sayNameTimed = function() {
//     var self = this;
//     setTimeout(function() {
//         console.log(`My name is ${self.name}`);
//     }, 1000);
// }

// workaround 2 using bind
// Person.prototype.sayNameTimed = function() {
//     setTimeout(function() {
//         console.log(`My name is ${this.name}`);
//     }.bind(this), 1000);
// }

// es6 solution usin arrow function
Person.prototype.sayNameTimed = function() {
    setTimeout(() => {
        console.log(`My name is ${this.name}`);
    }, 1000);
}


var p1 = new Person('Sean');
p1.sayNameTimed();