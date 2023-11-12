const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt.config');

const auth = function (req, res, next) {
    const header = req.headers['authorization']
    const token = header && header.split(' ')[1]

    if (!token) {
        return res.status(401)
            .send({ message: 'Token not provided' });
    }

    jwt.verify(token, jwtConfig.secret, (err, user) => {
        if (err) {
            return res.status(403)
                .send({ message: err.message });
        }

        req.user = user
        next();
    });
}

module.exports = auth;
