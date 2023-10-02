const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('register', {
  email: DataTypes.STRING,
  // Add other attributes as needed
}, {
  timestamps: false,
  tableName: 'register',
});

module.exports = User;
