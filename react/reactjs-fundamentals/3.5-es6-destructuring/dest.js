/* jshint esversion: 6 */

var arr = [1, 2, 3, 4];

var a = arr[0];
var b = arr[1];
var c = arr[2];

var [a, b, c, d] = arr;
console.log(a, b, c, d);

var arr1 = [1, 2, 3];
var [x, , y] = arr1;
console.log(x, y);

[x, y] = [y, x];
console.log(x, y);

var dog = {
    name: 'sparky',
    age: 5,
    toys: ['rope', 'bone']
}

var { name: dogName, age: dogAge, toys:dogToys } = dog;
console.log(dogName, dogAge, dogToys);

var {toys: [toy1, toy2]} = dog;
console.log(toy1, toy2);

//var { name: name, toys: toys } = dog;
var { name, toys } = dog;
console.log(name, toys)

let numbers = [[1,2,3], [4,5,6]];
let [[x1, y1, z1], otherArr] = numbers;
console.log(x1, y1, z1, otherArr);

