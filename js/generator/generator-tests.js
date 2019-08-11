let sum = 0;
for (let i of [1,2,3]) {
    sum += i;
}
console.log(sum);

let chars = [..."abcd"];
console.log(chars);

let data = [1,2,3,4,5];
console.log(Math.max(...data));

let m = new Map([['one', 1], ['two', 2]]);
for(let [k,v] of m) {
    console.log(k,v);
}

console.log([...m]);
console.log(...m.entries());
console.log(...m.keys())
console.log(...m.values());

function * oneDigitPrimes() {
    yield 2;
    yield 3;
    yield 5;
    yield 7;
}

let primes = oneDigitPrimes();
console.log(primes.next().value);
console.log(primes.next().value);
console.log(primes.next().value);
console.log(primes.next().value);
console.log(primes.next().value);
console.log(primes.next().done);
