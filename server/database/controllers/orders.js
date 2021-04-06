const Orders = require('../models/index.js').orders

module.exports = {
    getorders:   (req, res) => {
        Orders.find({}, (err, result) => {
            if (err) {
                console.error(err)
                return
         } 
        res.send(result)
    })
},

 getordersById :  (req,res) => { 
     Orders.findById(req.params.id,(err,result) => {
        res.send(result)
    })
},


addorders :  (req,res) => {
    const orders = new Orders({
       userId: req.body.userId,
       productId: req.body.productId,
       paimentStatus: req.body.paimentStatus,
       livraisonStatus: req.body.livraisonStatus,
    })
     orders.save(() => {
    res.send(orders)
})
},

 editorders :  (req,res) => {
     Orders.updateOne({ '_id': req.params.id }, req.body, (err, result) => {
         if (err) {
             res.status(400).send('id dont exist')
             return
         }
         res.status(200).send('message updated')
     })
   
},


 deleteordersById :   (req,res) => {
     Orders.deleteOne({ '_id': req.params.id }, (err, result) => {
         if (err) {
             res.status(400).send('id not found')
             return
         }
         res.status(200).send({"message":"orders deleted successfully"})
     })     
    }
}

