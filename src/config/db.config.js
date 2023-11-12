const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './blog.sqlite',
});

module.exports = sequelize;
