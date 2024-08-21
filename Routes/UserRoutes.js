const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Route for creating a new user
router.post('/', UserController.createUser);

// Route for getting all users
router.get('/', UserController.getUsers);

// Route for getting a user by ID
router.get('/:id', UserController.getUserById);

// Route for updating a user by ID
router.put('/:id', UserController.updateUser);

// Route for deleting a user by ID
router.delete('/:id', UserController.deleteUser);

module.exports = router;
