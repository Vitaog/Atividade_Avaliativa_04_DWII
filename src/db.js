const Sequelize = require('sequelize');
const sequelize = new Sequelize('atv4', 'root', '12345$', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;