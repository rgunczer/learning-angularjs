var protoObj = {
    testValue: 'Hello!'
};

var obj = Object.create(protoObj);

console.log(obj.testValue);

console.log(JSON.stringify(obj));

console.log('hello');


console.log('person test');

function Person(name) {
    this.name = name || 'Alex';
    this.age = 32;
    this.gender = 'Male';
}

Person.prototype.sayHello = function() {
    console.log('Hello my name is [' + this.name + ']');
}

var alex = new Person();

console.log('alex: ' + JSON.stringify(alex));

alex.sayHello();

var jil = Object.create(alex);

console.log('jil: ' + JSON.stringify(jil));
console.log('jil.name: ' + jil.name);