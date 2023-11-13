const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/comments.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const { body, query } = require('express-validator');

/**
 * Set validation chains
 */
const bodyChain = body('body')
    .exists()
    .withMessage('body does not exist')
    .notEmpty()
    .withMessage('body is empty');

const postIdChain = body('postId')
    .exists()
    .withMessage('postId does not exist')
    .notEmpty()
    .withMessage('postId is empty')
    .isNumeric()
    .withMessage('postId is  not number');

const userIdChain = query('userId')
    .optional()
    .notEmpty()
    .withMessage('userId is empty')
    .isNumeric()
    .withMessage('userId is  not number');

const postIdQueryChain = query('postId')
    .optional()
    .notEmpty()
    .withMessage('postId is empty')
    .isNumeric()
    .withMessage('postId is  not number');

const commentIdChain = query('commentId')
    .exists()
    .withMessage('commentId does not exist')
    .notEmpty()
    .withMessage('commentId is empty')
    .isNumeric()
    .withMessage('commentId is  not number');

/**
 * Set routes
 */
router.post(
    '/',
    bodyChain,
    postIdChain,
    authMiddleware,
    commentsController.create
);

router.get(
    '/',
    userIdChain,
    postIdQueryChain,
    authMiddleware,
    commentsController.read
);

router.put(
    '/',
    commentIdChain,
    bodyChain,
    authMiddleware,
    commentsController.update
);

router.delete(
    '/',
    commentIdChain,
    authMiddleware,
    commentsController.destroy
);

module.exports = router;
