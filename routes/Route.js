const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

// Define a route to get all users
router.get('/users', userController.getAllUsers);

module.exports = router;
