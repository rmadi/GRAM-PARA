const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String
    },
    price: {
        type: String
    },
    pricePromo: {
        type: String
    },
    imageUrl: {
        type: String
    },
    description: {
        type: String
    },
    producer: {
        type: String
    },
    category: {
        type: String
    },
    stock: {
        type: Boolean
    }
})

module.exports = mongoose.model('product', productSchema)