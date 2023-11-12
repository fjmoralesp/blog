const { validationResult } = require('express-validator');

async function create(req, res, next) {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        res.send({ errors: result.array() });
        return;
    }
}

async function read(req, res, next) {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        res.send({ errors: result.array() });
        return;
    }
}

async function update(req, res, next) {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        res.send({ errors: result.array() });
        return;
    }
}

async function erase(req, res, next) {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        res.send({ errors: result.array() });
        return;
    }
}

module.exports = {
    create,
    read,
    update,
    erase,
};
