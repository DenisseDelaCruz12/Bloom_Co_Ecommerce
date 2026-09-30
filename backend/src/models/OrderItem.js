const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Product = require('./Product');

const OrderItem = sequelize.define('OrderItem', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    productId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    unitPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
});

module.exports = OrderItem;