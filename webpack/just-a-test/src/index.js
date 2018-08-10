import _ from 'lodash';
import bar from './bar';
import { Person, sayHelloTo } from './another';

bar();

console.log('lodash version is: ' + _.VERSION);

console.log(_.capitalize('FRED'));

console.log(_.upperCase('apple'));


var p = new Person('Chris', 1);
// p.name = 'Harry';
// p.age = 30;

console.log(p.dump());


sayHelloTo('Robert');



// destructuring

var person = {
    name: 'Joel',
    age: 56,
    gender: 'male'
}


var {age, gender } = person;
console.log('----------------');
console.log(age);
console.log(gender);
console.log('----------------');


function printAge({age, name}) {
    console.log(age);
    console.log(name);
}

console.log(printAge(person));


let arr = ['japan', 'uk', 'hungary'];

let [one, two, three] = arr;

console.log(one);
console.log(two);
console.log(three);