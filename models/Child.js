'use strict';
const {  Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Child extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Child.hasMany(models.User, {
        foreignKey: "profileId",
        constraints: false,
        scope: {
          profileType: "Child",
        }}),
      
        Child.belongsTo(models.Parent)
        models.Parent.hasMany(Child)
    }
  }
  Child.init({
    family_name: DataTypes.STRING,
    first_name: DataTypes.STRING,
    birthday: DataTypes.DATE,
    country: DataTypes.STRING,
    picture: DataTypes.BLOB,
    ParentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Child',
  });
  return Child;
};