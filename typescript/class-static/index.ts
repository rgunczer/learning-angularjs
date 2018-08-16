interface IPizza {
    name: string;
    size: string;
}

class Pizza {
    name: string;
    size: string;
}

class PizzaMaker {
    static create(name: string): IPizza {
        const pizza = new Pizza(); // { name: name, size: "xl" }
        pizza.name = name;
        pizza.size = "xl";
        return pizza;
    }
}

const pizza: IPizza = PizzaMaker.create("hawaii");

console.log(pizza.name);


class Person {
    constructor(private name: string, private age: number) {
    }
    dump(): void {
        console.log('name is: ' + this.name + ',  age is: ' + this.age);
    }
}

const trevor = new Person("Trevor", 54);

trevor.dump();

class Player extends Person {
    game: string;
    constructor(name: string, age: number, game: string) {
        super(name, age);
        this.game = game;
    }
}

const john = new Player("john", 32, "farcry");

john.dump();
console.log(john.game);


enum Colors {
    yellow,
    black,
    green
}

function getColor(): number {
    return Colors.black;
}


console.log(getColor());


function foo(input: number) {
    switch(input) {
        case Colors.black:
            console.log('black');
            break;

        case Colors.green:
            console.log('green');
            break;

        case Colors.yellow:
            console.log('yellow');
            break;
    }
}

foo(Colors.black);

interface Debtor {
    creditLimit: number;
    isCredigLimitExceeding(): boolean;
}

class DebtorGroupingDebtor implements Debtor {
    creditLimit: number;

    isCredigLimitExceeding(): boolean {
        return true;
    }
}