const {sequelize, dataTypes} = require('sequelize');
const sequelize = new sequelize('sequelize::memory');

const Users = sequelize.define('User',{
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        // allowNull: false
      }
})