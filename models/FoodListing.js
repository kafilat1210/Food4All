const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const FoodListing = sequelize.define('FoodListing', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  availableUntil: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  timestamps: true,
});

FoodListing.belongsTo(User, { foreignKey: 'userId' });

module.exports = FoodListing;
