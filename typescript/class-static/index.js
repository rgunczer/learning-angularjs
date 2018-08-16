"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pizza = /** @class */ (function () {
    function Pizza() {
    }
    return Pizza;
}());
var PizzaMaker = /** @class */ (function () {
    function PizzaMaker() {
    }
    PizzaMaker.create = function (name) {
        var pizza = new Pizza(); // { name: name, size: "xl" }
        pizza.name = name;
        pizza.size = "xl";
        return pizza;
    };
    return PizzaMaker;
}());
var pizza = PizzaMaker.create("hawaii");
console.log(pizza.name);
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.dump = function () {
        console.log('name is: ' + this.name + ',  age is: ' + this.age);
    };
    return Person;
}());
var trevor = new Person("Trevor", 54);
trevor.dump();
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(name, age, game) {
        var _this = _super.call(this, name, age) || this;
        _this.game = game;
        return _this;
    }
    return Player;
}(Person));
var john = new Player("john", 32, "farcry");
john.dump();
console.log(john.game);
var Colors;
(function (Colors) {
    Colors[Colors["yellow"] = 0] = "yellow";
    Colors[Colors["black"] = 1] = "black";
    Colors[Colors["green"] = 2] = "green";
})(Colors || (Colors = {}));
function getColor() {
    return Colors.black;
}
console.log(getColor());
function foo(input) {
    switch (input) {
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
var DebtorGroupingDebtor = /** @class */ (function () {
    function DebtorGroupingDebtor() {
    }
    DebtorGroupingDebtor.prototype.isCredigLimitExceeding = function () {
        return true;
    };
    return DebtorGroupingDebtor;
}());
