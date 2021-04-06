const Product = require('../models/index.js').product

module.exports = {
    getProduct:   (req, res) => {
        Product.find({}, (err, result) => {
            if (err) {
                console.error(err)
                return
         } 
        res.send(result)
    })
},

 getProductById :  (req,res) => { 
     Product.findById(req.params.id,(err,result) => {
        res.send(result)
    })
},


addProduct :  (req,res) => {
    const product = new Product({
       pricePromo: req.body.pricePromo,
       title: req.body.title,
       name: req.body.name,
       price: req.body.price,
       imageUrl: req.body.imageUrl,
       descreption: req.body.descreption,
       producer: req.body.producer
    })
     product.save(() => {
    res.send(product)
})
},

 editProduct :  (req,res) => {
     console.log(req.body)
     Product.updateOne({ '_id': req.params.id }, req.body, (err, result) => {
         if (err) {
             res.status(400).send('id dont exist')
             return
         }
         res.status(200).send()
         return
     })
        
    
},


 deleteProductById :   (req,res) => {
     Product.deleteOne({ '_id': req.params.id }, (err, result) => {
         if (err) {
             res.status(400).send('id not found')
             return
         }
         res.status(200).send({"message":"product deleted successfully"})
     })
        
    
    }
}

