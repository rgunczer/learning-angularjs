/*jshint esversion: 6 */

var numbers = [1, 2, 3, 4];

var numbers2 = numbers.map(function(number) {
    return number * 2;
});

// form 1
var numbers3 = numbers.map((number) => {
    return number * 2;
});

// form 2 only one parameter
var numbers4 = numbers.map(number => {
    return number * 2;
})

// from 3 two parameter
var numbers5 = numbers.map((number, index) => {
    return number * 2;
})

// form 4 no parameters
var numbers6 = numbers.map(() => {
    return 12;
});

// form 5 one liners
var numbers7 = numbers.map(number => number * 2); // omit return and curly braces {}

console.log(numbers);
console.log(numbers2);
console.log(numbers3);
console.log(numbers4);
console.log(numbers5);
console.log(numbers6);
console.log(numbers7);

var myFunction = number => {
    console.log(number);
}

myFunction(34);