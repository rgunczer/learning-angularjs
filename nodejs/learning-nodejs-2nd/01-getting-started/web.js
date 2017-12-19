var http = require('http');

function process_request(req, res) {
    console.log('new request...');
    var body = 'Thanks for calling!\n';
    var content_length = body.length;
    res.writeHead(200, {
        'Content-Length': content_length,
        'Content-Type':'text/plain'
    });
    res.end(body);
}

var s = http.createServer(process_request);
s.listen(8081);

// test it with curl
// curl -i http://localhost:8081