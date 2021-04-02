const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    email: {
        type: String
    }

})

module.exports = mongoose.model('session',sessionSchema)