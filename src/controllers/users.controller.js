const usersService = require('../services/users.service');

async function get(req, res) {
    await usersService.get();

    res.send({
        message: 'Hello world!',
    });
}

module.exports = {
    get,
};
