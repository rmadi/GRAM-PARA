const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index.js')



router.get('/', controllers.orders.getorders);

router.get('/:id', controllers.orders.getordersById);     
      
router.post('/create', controllers.orders.addorders);
      
router.put('/:id', controllers.orders.editorders);

router.delete('/:id', controllers.orders.deleteordersById);
       

module.exports = router;
