const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

router.get('/users', authController.loadAllUser);
router.post('/authenticate', authController.authenticateController);

module.exports = router;