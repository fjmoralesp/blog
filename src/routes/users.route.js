const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');
const { body, query } = require('express-validator');

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

const usernameQueryChain = query('username')
    .exists()
    .withMessage('username does not exist')
    .notEmpty()
    .withMessage('username is empty');

/**
 * Set routes
 */
router.get('/', usernameQueryChain, usersController.find);

router.post(
    '/',
    usernameChain,
    passwordChain,
    usersController.create
);

router.post(
    '/login',
    usernameChain,
    passwordChain,
    usersController.login
);

module.exports = router;
