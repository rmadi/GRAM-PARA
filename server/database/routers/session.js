const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index.js')



router.get('/', controllers.session.getSession);

router.get('/:id', controllers.session.getSessionById);     
      
router.post('/create', controllers.session.addSession);
      
router.put('/:id', controllers.session.editSession);

router.delete('/:id', controllers.session.deleteSessionById);
       

module.exports = router;
