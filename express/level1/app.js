const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'jade');

app.get('/', (req, resp) => {
    resp.send('Hello World');
});

app.get('/blocks', (req, resp) => {
    // resp.redirect('/parts');
    resp.redirect(301, '/parts'); // permanent redirect
});

app.get('/parts', (req, resp) => {
    const blocks = ['fixed', 'movable', 'rotating'];
    // resp.send(blocks);
    // resp.sendFile(__dirname + '/index.html');
    resp.render('index', {
        title: 'Some Title',
        message: 'Some Message'
    });
});

// app.get('/style.css', (req, res) => {
//     res.sendFile(__dirname + '/style.css');
// })

const server = app.listen(3000, function() {
    const address = server.address().address;
    const port = server.address().port;
    console.log('Listening on %s, port: %s', address, port);
});
