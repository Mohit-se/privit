'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CuisineType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CuisineType.init({
    name: DataTypes.STRING,
    value: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CuisineType',
  });
  return CuisineType;
};