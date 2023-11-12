const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');
const { body } = require('express-validator');

/**
 * Set validation chains
 */
const usernameChain = body('username')
    .exists()
    .withMessage('username does not exist')
    .notEmpty()
    .withMessage('username is empty');

const passwordChain = body('password')
    .exists()
    .withMessage('password does not exist')
    .notEmpty()
    .withMessage('password is empty');

/**
 * Set routes
 */
router.get('/', usernameChain, usersController.find);

router.post(
    '/',
    usernameChain,
    passwordChain,
    usersController.create
);

module.exports = router;
