const Post = require('../models/post.model');
const Comment = require('../models/comment.model');
const User = require('../models/user.model');

async function create(title, body, user) {
    return await Post.create({ title, body, UserId: user.id });
}

async function read() {
    return await Post.findAll({
        include: [{
            model: Comment,
            as: 'Comments',
            include: [{
                model: User,
                as: 'User',
                attributes: ['id', 'username'],
            }],
        }]
    });
}

async function update(postId, data) {
    const { title, body, user } = data;

    return await Post.update({ title, body }, { where: { UserId: user.id, id: postId } });
}

async function destroy(postId, user) {
    return await Post.destroy({ where: { UserId: user.id, id: postId } });
}

module.exports = {
    create,
    read,
    update,
    destroy,
};
