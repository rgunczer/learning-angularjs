
export class Person {

    constructor(name = 'anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    dump() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
    }

}

export function sayHelloTo(name) {
    console.log('hello ' + name);
}