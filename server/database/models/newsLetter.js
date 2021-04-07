const mongoose = require('mongoose');

const newsLetterSchema = new mongoose.Schema({
    email: {
        type: String
    }
})

module.exports = mongoose.model('newsLetter',newsLetterSchema)