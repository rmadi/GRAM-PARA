const Session = require('../models/index.js').session

module.exports = {
    getSession:   (req, res) => {
        Session.find({}, (err, result) => {
            if (err) {
                console.error(err)
                return
         } 
        res.send(result)
    })
},

 getSessionById :  (req,res) => { 
     Session.findById(req.params.id,(err,result) => {
        res.send(result)
    })
},


addSession :  (req,res) => {
   const  session = new Session({
       userId: req.body.userId,
       session: req.body.session,
       date: req.body.date
    })
     session.save(() => {
    res.send(session)
})
},

 editSession :  (req,res) => {
     Session.updateOne({ '_id': req.params.id }, req.body, (err, result) => {
         if (err) {
             res.status(400).send('id dont exist')
             return
         }
         res.status(200).send('message updated')
     })
        
    
},


 deleteSessionById :   (req,res) => {
     Session.deleteOne({ '_id': req.params.id }, (err, result) => {
         if (err) {
             res.status(400).send('id not found')
             return
         }
         res.status(200).send({"message":"Session deleted successfully"})
     })
        
    
    }
}

