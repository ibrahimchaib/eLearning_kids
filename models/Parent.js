'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Parent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Parent.hasMany(models.User, {
        foreignKey: "profileId",
        constraints: false,
        scope: {
          profileType: "Parent",
        }}),
       Parent.hasMany(models.Chiled)
      }
  }
  Parent.init({
    family_name: DataTypes.STRING,
    first_name: DataTypes.STRING,
    birthday: DataTypes.DATE,
    country: DataTypes.STRING,
    picture: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'Parent',
  });
  return Parent;
};