const express = require('express');

const router = express.Router();

const OrderController = require('../controllers/OrdersController');

const orderController = new OrderController();

const authMiddleware = require('../middleware/auth');

router.use(authMiddleware);

router.post('/create', (req, res) => orderController.createOrder(req, res));

module.exports = router;