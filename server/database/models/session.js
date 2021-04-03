const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    userId: {
        type: String
    },
    session: {
        type: String,
    },
    date: {
        type: Date
    }
})

module.exports = mongoose.model('session',sessionSchema)