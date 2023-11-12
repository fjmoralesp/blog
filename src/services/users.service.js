const sequelize = require('../config/db.config');
const User = require('../models/user.model');

async function find(username) {
  return await User.findOne({ where: { username } });
}

async function findWithPassword(username) {
  return await User.scope('withPassword').findOne({ where: { username }});
}

async function create(username, password) {
  const user = await User.create({ username, password });

  return await find(username);
}

module.exports = {
  find,
  create,
  findWithPassword,
};
