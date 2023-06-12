const Sequelize = require('sequelize');
const sequelize = new Sequelize('atv4', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;