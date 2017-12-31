var fs = require('fs');

fs.readFile('./script.js', function(err, data) {
    console.log('script.js contents'); //data.toString());
    fs.readFile('./pyramid.js', function(err, data) {
        console.log('pyramid.js contents'); //data.toString());
    })
});