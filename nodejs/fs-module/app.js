var fs = require('fs');

// async read
fs.readFile('input.txt', function(error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log('Async data is: ' + data.toString());
    }
});

var data = fs.readFileSync('input.txt');
console.log('Sync data is: ' + data.toString());

console.log('End');