'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PersonalInformation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PersonalInformation.init({
    user_id: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    blood_group: DataTypes.STRING,
    age: DataTypes.STRING,
    height: DataTypes.STRING,
    weight: DataTypes.STRING,
    allergies: DataTypes.STRING,
    diet_type: DataTypes.STRING,
    medical_conditions: DataTypes.STRING,
    active_state: DataTypes.STRING,
    goal: DataTypes.STRING,
    cuisine_type: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PersonalInformation',
  });
  return PersonalInformation;
};