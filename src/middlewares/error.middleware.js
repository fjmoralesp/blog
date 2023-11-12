const error = function (err, req, res, next) {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode)
        .send({ message: err.message });
}

module.exports = error;
