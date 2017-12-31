var numbers = [5, 10, 4, 3]
var evens = numbers.filter(function(number) {
    return number % 2 == 0;
})

console.log(evens)

var results = numbers
    .filter(function(number) {
        return number % 2 == 0;
    })
    .map(function(number) {
        return number + 100;
    })

console.log(results);