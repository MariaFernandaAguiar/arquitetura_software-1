const CitiesReporter = require('../controllers/CitiesControllers');
const express = require('express');
const router = express.Router();

router.post('/formatter/:format', CitiesReporter.postFormat);

module.exports = router;