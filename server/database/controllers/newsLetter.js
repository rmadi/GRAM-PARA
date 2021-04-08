const NewsLetter = require('../models/index.js').newsLetter

module.exports = {
    getnewsLetter:   (req, res) => {
        NewsLetter.find({}, (err, result) => {
            if (err) {
                console.error(err)
                return
         } 
        res.send(result)
    })
},

 getnewsLetterById :  (req,res) => { 
     NewsLetter.findById(req.params.id,(err,result) => {
        res.send(result)
    })
},


addnewsLetter :  (req,res) => {
    const newsLetter = new NewsLetter({
       email : req.body.email,
    })
     newsLetter.save(() => {
    res.send(newsLetter)
})
},

 editnewsLetter :  (req,res) => {
     NewsLetter.updateOne({ '_id': req.params.id }, req.body, (err, result) => {
         if (err) {
             res.status(400).send('id dont exist')
             return
         }
         res.status(200).send('message updated')
     })
   
},


 deletenewsLetterById :   (req,res) => {
     NewsLetter.deleteOne({ '_id': req.params.id }, (err, result) => {
         if (err) {
             res.status(400).send('id not found')
             return
         }
         res.status(200).send({"message":"NewsLetter deleted successfully"})
     })     
    }
}

