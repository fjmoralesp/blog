const usersService = require('../services/users.service');

async function find(req, res) {
    const { username } = req.body;
    const user = await usersService.find(username);
    res.send({
        message: 'user found',
        data: user,
    });
}

async function create(req, res) {
    const { username, password } = req.body;
    const user = await usersService.create(username, password);
    res.send({
       message: 'user created',
       data: user,
    });
}

module.exports = {
    find,
    create,
};
