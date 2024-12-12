const express = require('express');
const router = express.Router();
const wordController = require('../controllers/wordController');    

router.get('/:id', wordController.transformId);
router.get('/transform/:word', wordController.transformWord);

module.exports = router;