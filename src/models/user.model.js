const sequelize = require('../config/db.config');
const { DataTypes } = require('sequelize');
const hash = require('string-hash');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            this.setDataValue('password', hash(value));
        }
    }
}, {
    defaultScope: {
        attributes: { exclude: ['password'] },
    },
});

module.exports = User;
