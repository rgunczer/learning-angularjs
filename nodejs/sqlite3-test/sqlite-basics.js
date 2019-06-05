const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('testdb',
sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.errir(err.message);
    }
    console.log('Connected to the database');
});
db.serialize(function() {
    db.run(`INSERT INTO users (name, pass) VALUES('one', 'pass1')`);
    db.run(`INSERT INTO users (name, pass) VALUES('two', 'pass2')`);

    db.each('SELECT * FROM users', function(err, row) {
        console.log(row.name, row.pass, row.id);
    });
});
db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Close the database connection');
});