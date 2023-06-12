const Sequelize = require('sequelize');
const database = require('../db');

const Turno = sequelize.define(
    'turno',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        turno: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
);

module.exports = Turno;