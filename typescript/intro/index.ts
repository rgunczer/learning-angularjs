function speak(value : string) : string {
    console.log(value);
    return value.length; // TS error return type
}

var greeted = "Hello";
var greeting = "World";
var whatToSay : string = greeting + greeted;

speak(whatToSay)