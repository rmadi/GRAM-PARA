const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index.js')




router.get('/:id', controllers.session.getSessionById);     
      
      

       

module.exports = router;
