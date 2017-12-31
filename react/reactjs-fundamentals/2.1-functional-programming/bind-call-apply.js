'use strict';

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayName = function(x) {
    console.log('My name is: ' + this.name);
    console.log(x);
}

var p1 = new Person('Joe', 18);
p1.sayName();
var p2 = new Person('Sam', 25);

var sayName = p1.sayName;

//sayName(); // undefined error this not set in strict mode it is set to undefined

sayName.call(p1, 'hello');
sayName.apply(p1, ['hello']);
//sayName.call(p2);
//sayName.call({name: 'jannet'});

var boundSayName = sayName.bind(p1, 'hello');
boundSayName();