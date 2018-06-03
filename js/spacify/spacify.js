function spacify(str) {
    var result = '';
    for(var i = 0; i < str.length; ++i) {
        result += str.charAt(i) + ' ';
    }
    result = result.slice(0, result.length - 1);
    return result;
}

function spacify2(str) {
    return str.split('').join(' ');
}

console.log(spacify('hello world'));
console.log(spacify2('hello world'));


String.prototype.spacify = function() {
    return this.split('').join(' ');
};

console.log('hello'.spacify());
