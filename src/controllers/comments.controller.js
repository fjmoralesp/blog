const { validationResult } = require('express-validator');
const commentService = require('../services/comments.service');

async function create(req, res, next) {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        res.send({ errors: result.array() });
        return;
    }

    try {
        const { postId, body } = req.body;
        const { user } = req;
        const comment = await commentService.create(postId, body, user);
        res.send({
            message: 'comment created',
            data: comment,
        });
    } catch (error) {
        next(error);
    }
}

async function read(req, res, next) {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        res.send({ errors: result.array() });
        return;
    }

    try {
        const { userId, postId } = req.query;
        if (!userId && !postId) {
            res.send({
                message: 'userId or postId is required',
            });
            return;
        }

        let comments;
        if (userId) {
            comments = await commentService.findByUser(userId);
        }

        if (!userId && postId) {
            comments = await commentService.findByPost(postId);
        }

        res.send({
            message: 'comments found',
            data: comments,
        });
    } catch (error) {
        next(error);
    }
}

async function update(req, res, next) {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        res.send({ errors: result.array() });
        return;
    }

    try {
        const { body } = req.body;
        const { user } = req;
        const { commentId } = req.query;
        await commentService.update(commentId, body, user);
        res.send({
            message: 'comment updated',
        });
    } catch (error) {
        next(error);
    }
}

async function destroy(req, res, next) {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        res.send({ errors: result.array() });
        return;
    }

    try {
        const { user } = req;
        const { commentId } = req.query;
        await commentService.destroy(commentId, user);
        res.send({
            message: 'comment deleted',
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    create,
    read,
    update,
    destroy,
};
