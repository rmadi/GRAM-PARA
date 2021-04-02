const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: Number
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    phoneNumber: {
        type: Number
    },
    city: {
        type: String
    },
    address1: {
        type: String
    },
    address2: {
        type: String
    },
    zipCode: {
        type: Number
    },
    role: {
        type: String
    }
    
})

module.exports = mongoose.model('user', userSchema)