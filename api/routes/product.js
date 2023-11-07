const express = require('express');
const authenticateToken = require('./middleware');
const { getAllProductsController } = require('../controllers/product.controller');
const router = express.Router();

router.get("/products", getAllProductsController);

module.exports = router;