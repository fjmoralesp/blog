const sequelize = require('../config/db.config');

async function get() {
    try {
        await sequelize.authenticate();
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
  get,
};
