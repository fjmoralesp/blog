const sequelize = require('../config/db.config');
const { DataTypes } = require('sequelize');

const Post = sequelize.define('Post', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [2, 255],
                msg: 'Title length should be between 2 and 255',
            },
        },
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});

module.exports = Post;
