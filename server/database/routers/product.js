const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index.js')



router.get('/', controllers.product.getProduct);

router.get('/:id', controllers.product.getProductById);     
      
router.post('/create', controllers.product.addProduct);
      
router.put('/:id', controllers.product.editProduct);

router.delete('/:id', controllers.product.deleteProductById);
       

module.exports = router;
