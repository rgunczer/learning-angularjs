function r(input, min, max) {
    if (input >= min && input <= max) {
        return input;
    }
    if (input < min)  {
        return min;
    }
    if (input > max) {
        return max;
    }
}

function r1(input, min, max) {
    if (input < min)
        return min;
    if (input > max)
        return max;
    return input;
}

function r2(input, min, max) {
    return input > max ? max : input < min ? min : input;
}

function r3(input, min, max) {
    var v = Math.min(input, max);
    return Math.max(v, min);
}

console.log(r(6, 5, 10));
console.log(r1(6, 5, 10));
console.log(r2(1, 5, 10));
console.log(r3(12, 5, 10));