'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Brands', [
      {
        name: 'Outback',
        createdAt: new Date(),
        updatedAt: new Date
      },
      {
        name: 'Rei do Mate',
        createdAt: new Date(),
        updatedAt: new Date
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Brands', null, {});
  }
};
