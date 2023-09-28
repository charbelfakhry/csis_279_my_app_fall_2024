const express = require('express');
const { authenticateController } = require('../controllers/authController');
const router = express.Router();

router.post('/authenticate', authenticateController);

module.exports = router;