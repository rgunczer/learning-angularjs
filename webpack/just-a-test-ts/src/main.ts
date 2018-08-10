
function sayHelloTo(name: string): void {
    console.log("Hello " + name);
}

sayHelloTo("Joel");


class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    dump(): void {
        console.log(`Name is: ${this.name} and age is: ${this.age}`);
    }
}

const p = new Person("Ellie", 16);
p.dump();