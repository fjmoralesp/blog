const Comment = require('../models/comment.model');

async function create(postId, body, user) {
    return await Comment.create({ PostId: postId, body, UserId: user.id });
}

async function findByUser(userId) {
    return await Comment.findAll({ where: { UserId: userId } });
}

async function findByPost(postId) {
    return await Comment.findAll({ where: { PostId: postId } });
}

async function update(commentId, body, user) {
    return await Comment.update({ body }, { where: { UserId: user.id, id: commentId } });
}

async function destroy(commentId, user) {
    return await Comment.destroy({ where: { UserId: user.id, id: commentId } });
}

module.exports = {
    create,
    findByUser,
    findByPost,
    update,
    destroy,
};
