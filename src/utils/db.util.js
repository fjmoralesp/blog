const sequelize = require('../config/db.config');

async function sync() {
    await sequelize.sync({ alter: true });
    console.log('All models synchronized successfully');
}

module.exports = {
    sync,
};
