const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const { body, query } = require('express-validator');

/**
 * Set validation chains
 */
const titleChain = body('title')
    .exists()
    .withMessage('title does not exist')
    .notEmpty()
    .withMessage('title is empty')
    .isLength({ min: 2, max: 255 })
    .withMessage('title length should be between 2 and 255');

const bodyChain = body('body')
    .exists()
    .withMessage('body does not exist')
    .notEmpty()
    .withMessage('body is empty');

const postIdChain = query('postId')
    .exists()
    .withMessage('postId does not exist')
    .notEmpty()
    .withMessage('postId is empty')
    .isNumeric()
    .withMessage('postId is  not number');

/**
 * Set routes
 */
router.post(
    '/',
    titleChain,
    bodyChain,
    authMiddleware,
    postsController.create
);

router.get(
    '/',
    authMiddleware,
    postsController.read
);

router.put(
    '/',
    postIdChain,
    titleChain,
    bodyChain,
    authMiddleware,
    postsController.update
);

router.delete(
    '/',
    postIdChain,
    authMiddleware,
    postsController.destroy
);

module.exports = router;
