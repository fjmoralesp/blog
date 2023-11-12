const sequelize = require('../config/db.config');
const User = require('../models/user.model');
const Post = require('../models/post.model');
const Comment = require('../models/comment.model');

async function sync() {
    await sequelize.sync();
    console.log('All models synchronized successfully');
}

function registerRelations() {
    User.hasMany(Post);
    User.hasMany(Comment);

    Post.belongsTo(User);
    Post.hasMany(Comment);

    Comment.belongsTo(Post);
    Comment.belongsTo(User);
}

module.exports = {
    sync,
    registerRelations,
};
