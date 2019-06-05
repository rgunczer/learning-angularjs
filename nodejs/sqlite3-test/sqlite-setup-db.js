const sqlite3 = require('sqlite3').verbose();
let testdb = 'testdb';
let db = new sqlite3.Database(testdb, (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQLite database');
});
db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Close the database connection');
})

console.log('hello nodejs again');