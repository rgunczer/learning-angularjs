/* jshint esversion: 6 */

class Creature {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(`My name is ${this.name}`);
    }
}

class Persona extends Creature {
    constructor(name, job) {
        super(name);
        this.job = job;
    }
}

var p1 = new Persona('Chuck', 'barber');
console.log(p1.name);
console.log(p1.job);
console.log(p1.sayName === Creature.prototype.sayName);

p1.sayName();

/*
class Dog extends Creature {
    constructor
}

class Person {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log(`My name is ${this.name}`);
    }
}

var p1 = new Person('Hank');

console.log(Person);
p1.sayName();

console.log(p1.__proto__ === Person.prototype);
console.log(p1.__proto__.sayName === Person.prototype.sayName);

// this = undefined
//var sayName = p1.sayName;
//sayName();

var sayName = p1.sayName.bind(p1);
sayName();
*/