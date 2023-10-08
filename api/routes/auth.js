const express = require('express');
const { authenticateController, getAllUsersController } = require('../controllers/authController');
const authenticateToken = require('./middleware');
const router = express.Router();

router.post('/authenticate', authenticateController);
router.get("/users", authenticateToken, getAllUsersController);

module.exports = router;