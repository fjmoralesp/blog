
function get(req, res) {
    res.send({
        message: 'Hello world!',
    });
}

module.exports = {
    get,
};
