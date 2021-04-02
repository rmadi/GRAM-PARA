const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
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
        
    }
    
})

module.exports = mongoose.model('product', productSchema)