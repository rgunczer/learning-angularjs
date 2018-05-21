const express = require('express');
// var cors = require('cors');
const app = express();
// app.use(cors({origin: 'http://localhost:8888'}));
//const router = express.Router();
//const port = 8888;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var profiles = [
    {
        name: 'Sue',
        age: 30,
        bio: 'enjoys swimming biking',
        hobbies: [
            'swimming',
            'biking'
        ]
    },
    {
        name: 'Bill',
        age: 40,
        bio: 'enjoys long walks on the beach',
        hobbies: [
            'gardening',
            'games'
        ]
    }
];

// app.get('/', (request, response) => response.send('Hello World!'));
app.get('/profiles', (req, res) => {
    res.json(profiles)
});

app.listen(8888, () => console.log('Listening on port 8888'));