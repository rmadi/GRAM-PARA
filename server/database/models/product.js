const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String
    },
    title: {
        type: String
    },
    price: {
        type: Number
    },
    pricePromo: {
        type: Number
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