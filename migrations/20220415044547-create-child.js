'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Children', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      family_name: {
        type: Sequelize.STRING
      },
      first_name: {
        type: Sequelize.STRING
      },
      birthday: {
        type: Sequelize.DATE
      },
      country: {
        type: Sequelize.STRING
      },
      picture: {
        type: Sequelize.BLOB
      },
      ParentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // Parent hasMany kids 1:n
          model: 'Parents',
          key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Children');
  }
};