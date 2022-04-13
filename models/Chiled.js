'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chiled extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Chiled.hasMany(models.User, {
        foreignKey: "profileId",
        constraints: false,
        scope: {
          profileType: "Chiled",
        }}),
      
      Chiled.belongsTo(models.Parent, {foreignKey: 'parent_id'})
    }
  }
  Chiled.init({
    family_name: DataTypes.STRING,
    first_name: DataTypes.STRING,
    birthday: DataTypes.DATE,
    contry: DataTypes.STRING,
    picture: DataTypes.BLOB,
    parent_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Chiled',
  });
  return Chiled;
};