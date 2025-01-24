const express = require('express');

const router = express.Router();

const ProductController = require('../controllers/ProductController');

const productController = new ProductController();

router.get('/list', (req, res) => productController.listProducts(req, res));
module.exports = router;
