const hash = require('string-hash');
const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt.config');

function auth(user, password) {
    const encodedPassword = hash(password);
    if (user.password !== encodedPassword) {
        throw new Error('Given password does not match');
    }

    const token = jwt.sign({ name: user.username }, jwtConfig.secret, { expiresIn: jwtConfig.expires })

    return { username: user.username, token };
}

module.exports = {
    auth,
};
