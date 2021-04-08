const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index.js')



router.get('/', controllers.newsLetter.getnewsLetter);

router.get('/:id', controllers.newsLetter.getnewsLetterById);     
      
router.post('/create', controllers.newsLetter.addnewsLetter);
      
router.put('/:id', controllers.newsLetter.editnewsLetter);

router.delete('/:id', controllers.newsLetter.deletenewsLetterById);
       

module.exports = router;
