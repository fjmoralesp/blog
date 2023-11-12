const usersService = require('../services/users.service');

async function find(req, res, next) {
    try {
        const { username } = req.body;
        const user = await usersService.find(username);
        res.send({
            message: 'user found',
            data: user,
        });
    } catch (error) {
        next(error);
    }
}

async function create(req, res, next) {
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

module.exports = {
    find,
    create,
};
