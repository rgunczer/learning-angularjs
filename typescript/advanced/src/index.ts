function sayHelloTo(name: string): string {
    return `hello mr ${name}`;
}


const msg = sayHelloTo('Guy');

console.log(msg);

class Collector {

    arr: string[] = [];

    add(arg: string): Collector {
        this.arr.push(arg);
        return this;
    }

    collect(separator: string): string {
        return this.arr.join(separator);
    }
}

const test = new Collector()
    .add('apple')
    .add('kiwi')
    .add('latte')
    .collect('?');

console.log(`collector is collected [${test}]`);


type AnimalColors = 'red' | 'white' | 'black';

interface Animal {
    name: string;
    age: number;
    color: AnimalColors;
}

// keyof
type AnimalKeys = keyof Animal;

type ageType = Animal['age'];
type nameType = Animal['name'];
type colorType = Animal['color'];

// T[K] accesss operator
function getPropValue<T, K extends keyof T>(obj: T, propName: K): T[K] {
    return obj[propName];
}

const cat: Animal = {
    name: 'kitty',
    age: 1,
    color: 'red'
};
const catColor = getPropValue(cat, "color");
console.log(`catColor is [${catColor}]`);

function getProperties<T, K extends keyof T>(obj: T, names: K[]): T[K][] {
    return names.map(name => obj[name]);
}


const catAgeAndName = getProperties(cat, ['name', 'age']);
console.log(`catAgeAndName array [${catAgeAndName}]`);

function mergeTest() {

    console.log('merge Test');

    function merge<T, U>(obj1: T, obj2: U): T & U {
        return Object.assign({}, obj1, obj2);
    }

    const ob1 = {
        id: 1,
        name: 'apple'
    };

    const ob2 = {
        color: 'red',
        age: 12
    };

    const ob3 = merge(ob1, ob2);
    console.log({ ob1, ob2, ob3 });
}

mergeTest();
