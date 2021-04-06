const Session = require('../models/index.js').session

module.exports = {
    find:   (cookie) => {
        Session.find({"session":cookie}, (err, result) => {
            if (err) {
                console.error(err)
                return
         } 
        return result
    })
},

 getSessionById :  (req,res) => { 
     Session.findById(req.params.id,(err,result) => {
        res.send(result)
    })
},


addSession :  (id,session) => {
    console.log ("ghgf")
   var  sessionAdd = new Session({
       userId: id,
       session: session,
       date: new Date(Date.now()),
    })
    sessionAdd.save(() => {
        console.log('session saved')
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



