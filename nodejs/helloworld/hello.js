var http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200);
    response.write('hello ');
    response.end();
}).listen(4100);
console.log('listening on port 4100');
console.log(__filename);
console.log(__dirname);

function stuff() {
    console.log('stuff');
}

setTimeout(stuff, 5000);