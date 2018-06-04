const food = {
    init: function(type) {
        this.type = type;
    },
    eat: function() {
        console.log('you ate the ' + this.type);
    }
}

const waffle = Object.create(food);
const carrot = Object.create(food);

food.eat = function() {
    console.log('YOU ATE THE ' + this.type.toUpperCase());
}

waffle.init('waffle');
waffle.eat();

carrot.init('carret');
carrot.eat();

console.log('waffle is food: ' + food.isPrototypeOf(waffle));

let cat = {
    breed: 'munchkin'
};

let myCat = {
    name: 'Fluffykins'
};

Object.setPrototypeOf(myCat, cat);

console.log(myCat.name);
console.log(myCat.breed);