const sequelize = require('../config/db.config');
const { DataTypes } = require('sequelize');

const Comment = sequelize.define('Comment', {
    body: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});

module.exports = Comment;
