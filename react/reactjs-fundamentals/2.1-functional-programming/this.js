'use strict';

function Person(name, age) {
    this.name = name;
    this.age = age;
    // this.sayName = function() {
    //     console.log('Hello my name is: ' + this.name);
    // }
    // behind the scenes returns this
}

console.log(Person.prototype);

Person.prototype.sayName = function() {
    console.log('Hello my name is: ' + this.name);
}

var p1 = new Person('Adrienne', 24);
console.log(p1);
var p2 = new Person('Tim', 14);

p1.sayName();

var name = p1.name;
var sayName = p1.sayName;

console.log(sayName);

sayName();
