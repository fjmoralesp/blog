const usersService = require('../services/users.service');
const authService = require('../services/auth.service');
const { validationResult } = require('express-validator');

async function find(req, res, next) {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        res.send({ errors: result.array() });
        return;
    }

    try {
        const { user: { id } } = req;
        const user = await usersService.find(id);
        res.send({
            message: 'user found',
            data: user,
        });
    } catch (error) {
        next(error);
    }
}

async function create(req, res, next) {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        res.send({ errors: result.array() });
        return;
    }

    try {
        const { username, password } = req.body;
        const user = await usersService.create(username, password);
        res.send({
            message: 'user created',
            data: user,
        });
    } catch (error) {
        next(error);
    }
}

async function login(req, res, next) {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        res.send({ errors: result.array() });
        return;
    }

    try {
        const { username, password } = req.body;
        const user = await usersService.findWithPassword(username);
        const data = authService.auth(user, password);
        res.send({
            message: 'login successful',
            data: data,
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    find,
    create,
    login,
};
