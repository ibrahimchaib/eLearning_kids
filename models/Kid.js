'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kid extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Kid.hasMany(models.User, {
        foreignKey: "profileId",
        constraints: false,
        scope: {
          profileType: "Kid",
        }}),
      
        Kid.belongsTo(models.Parent, {foreignKey: 'parent_id'})
    }
  }
  Kid.init({
    family_name: DataTypes.STRING,
    first_name: DataTypes.STRING,
    birthday: DataTypes.DATE,
    country: DataTypes.STRING,
    picture: DataTypes.BLOB,
    parent_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Kid',
  });
  return Kid;
};