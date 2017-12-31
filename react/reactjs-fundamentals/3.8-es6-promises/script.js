var fs = require('fs');

//var file = fs.readFileSync('./script.js');
//console.log(file.toString());

fs.readFile('./script.js', function(err, data){
    console.log(3);
    if (err) {
        // handle the err case
        console.log(err);
        return;
    }
    console.log(data.toString());
});

console.log(1);
console.log(2);
