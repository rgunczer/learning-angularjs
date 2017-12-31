var numbers = [1, 2, 10, 15, 100];

// var sum = 0;
// for(var i = 0; i < numbers.length; ++i) {
//     sum += numbers[i];
// }

var sum = numbers.reduce(function(memo, value) {
    return memo + value;
}, 0)


console.log(sum);
