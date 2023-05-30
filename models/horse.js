'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Horse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Horse.init({
    barn_name: DataTypes.STRING,
    registered_name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    breed: DataTypes.STRING,
    sex: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Horse',
  });
  return Horse;
};