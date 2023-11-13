const { validationResult } = require('express-validator');
const postsService = require('../services/posts.service');

async function create(req, res, next) {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        res.send({ errors: result.array() });
        return;
    }

    try {
        const { title, body } = req.body;
        const { user } = req;
        const post = await postsService.create(title, body, user);
        res.send({
            message: 'post created',
            data: post,
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
        const posts = await postsService.read();
        res.send({
            message: 'posts found',
            data: posts,
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
        const data = {
            title: req.body.title,
            body: req.body.body,
            user: req.user,
        }
        const { postId } = req.query;
        await postsService.update(postId, data);
        res.send({ message: 'posts updated' });
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
        const { postId } = req.query;
        const { user } = req;
        await postsService.destroy(postId, user);
        res.send({ message: 'posts deleted' });
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
