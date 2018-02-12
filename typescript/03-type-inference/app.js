var animal = {
    name: 'fido',
    species: 'dog',
    //age: 5,
    age: calculateAge(2010),
    speak: function () {
        console.log('Woof!');
    }
};
// animal.name = 1 // TypeScript error name is string cannot assign number
function calculateAge(birthYear) {
    return Date.now() - birthYear;
}
// any type  ts cannot figure out
function totalLength(x, y) {
    var total = x.length + y.length;
    return total;
}
