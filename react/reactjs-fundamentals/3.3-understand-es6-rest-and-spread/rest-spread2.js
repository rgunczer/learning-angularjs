/*
function talk(greeting, farewell, names) {
    names.forEach(function(name) {
        console.log(`${greeting} ${name}!`);
        console.log(`${farewell} ${name}!`);
    })
}

talk('hello', 'goodby', ['bill', 'joe', 'morty']);
*/

function talk2(greeting, farewell) {
    console.log(arguments);
    var args = Array.prototype.slice.call(arguments, 2);
    console.log(args);
}

talk2('hello', 'goodby', 'bill', 'joe', 'morty');

function talk3(greeting, farewell, ...names) {
    console.log(names);
    names.forEach(function(name) {
        console.log(`${greeting} ${name}!`);
        console.log(`${farewell} ${name}!`);        
    })
}

talk3('hello', 'goodby', 'bill', 'joe', 'morty');

var arr = ['hello', 'goodby'];
talk3(...arr, 'bill', 'joe', 'morty');
