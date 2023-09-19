const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

router.get('/users', authController.loadAllUser);

module.exports = router;