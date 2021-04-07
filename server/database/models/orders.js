const mongoose = require('mongoose');

const ordresSchema = new mongoose.Schema({
    userId: {
        type: String
    },
    productId: {
        type: String,
    },
    paimentStatus: {
        type: String
    },
    livraisonStatus: {
        type: String
    }
})

module.exports = mongoose.model('ordres',ordresSchema)