const crypto = require('crypto')
const sessionController = require('../controllers/index.js')
const user = require('../controllers/index.js').user
var createHash =   (data, salt = '') => {
  let shasum = crypto.createHash('sha256').update(data + salt).digest('hex');
  return shasum;
};
module.exports = {
      createHash,
      HashComparer : (User_Password , Stored_Password,salt)=>{
          return (Stored_Password === createHash(User_Password,salt))
      },
      RandomString : (length)=>{
        return crypto.randomBytes(length).toString('hex');
      },
      CreateSession : (req,res,user_id,session)=>{
          console.log (sessionController)
        sessionController.session.addSession(user_id,session)
                res.cookie('GRAM', session,{
                    maxAge: 86400 * 1000, 
                    httpOnly: false, 
                    secure: false
                })
                res.status(200).send('success')
          
},
VerifySession : (req,res,next)=>{
    if(req.cookies.GRAM){
        sessionController.find(req.cookies.GRAM)
            .then((result)=>{console.log (result)
                if(result.length >0){

                    res.status(200).send()
                }else{
                    res.status(200).send('Session Login Fail')
                }
            })
            .catch((err)=>{
                res.status(500).send('Server Error') 
            })
    }else{
        res.status(200).send('Session Login Fail')
    }
},
VerifyAdminSession : (req,res,next)=>{
    if(req.cookies.RBKCTF){
        models.session.Get(req.cookies.RBKCTF)
            .then((result)=>{
                if(result.length >0 && (result[0].date > Date.now()) && result[0].id == 0){
                    res.render('Dashboard')
                }else{
                    res.render('adminLogin')
                }
            })
            .catch((err)=>{
                res.status(500).send('Server Error') 
            })
    }else{
        res.render('adminLogin')
    }
}
}