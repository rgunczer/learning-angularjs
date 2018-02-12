// union types 
function totalLength(x, y) {
    var total = x.length + y.length;
    x.slice(0);
    // type guard syntax
    if (x instanceof Array) {
        x.push('abc');
    }
    if (x instanceof String) {
        x.substr(1);
    }
    if (typeof x === 'string') {
        x.substr(1);
    }
    return total;
}
