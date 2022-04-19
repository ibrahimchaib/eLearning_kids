'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Parent, {
        foreignKey: "profileId",
        constraints: false,
      });
      User.belongsTo(models.Child, {
        foreignKey: "profileId",
        constraints: false,
      });
    }
  }
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    profileId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    profileType: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};