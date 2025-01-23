const express = require('express');

const UserController = require('../controllers/UserController');

const router = express.Router();

const userController = new UserController();

router.post('/login', userController.login);

router.post('/register',userController.register);

module.exports = router;
