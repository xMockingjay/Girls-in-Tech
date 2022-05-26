'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Brand_Categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      brand_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Brands', key: 'id'}
      },
      category_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Merchants', key: 'id'}
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
    await queryInterface.dropTable('Brand_Categories');
  }
};