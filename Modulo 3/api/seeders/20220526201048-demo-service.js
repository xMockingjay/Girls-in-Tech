'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Services', [
      {
        name: 'Delivery',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Take away',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Indoor',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Services', null, {});
  }
};
