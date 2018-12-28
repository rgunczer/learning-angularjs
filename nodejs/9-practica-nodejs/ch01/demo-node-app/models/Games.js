const mongoose = require('mongoose');

const gamesSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    year: {
        type: Number,
        trim: true
    }
});

module.exports = mongoose.model('Games', gamesSchema);
