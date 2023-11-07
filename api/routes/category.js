const express = require('express');
const { getAllCategoriesController } = require('../controllers/category.controller');
const router = express.Router();

router.get("/categories", getAllCategoriesController);

module.exports = router;