const { DataTypes } = require('sequelize');
const sequelize = require('../config/database')

const Order = sequelize.define('Order', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    status: {
        type: DataTypes.ENUM(
            'PENDING',
            'CONFIRMED',
            'PREPARING',
            'OUT_FOR_DELIVERY',
            'DELIVERED',
            'CANCELED'
        ),
        allowNull: false,
        defaultValue: 'PENDING'
    }
});

module.exports = Order;