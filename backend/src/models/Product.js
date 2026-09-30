const { DataTypes } = require('sequilize');
const sequilize = require('../config/database');

const Product = sequilize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false
    },

    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },

    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },

    imageURL: {
        type: DataTypes.STRING,
        allowNull: true
    },

    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },

    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Product;