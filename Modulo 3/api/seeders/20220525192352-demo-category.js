'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Lanche',
        createdAt: new Date(),
        updatedAt: new Date
      },
      {
        name: 'Hamburguer',
        createdAt: new Date(),
        updatedAt: new Date
      },
      {
        name: 'Kids',
        createdAt: new Date(),
        updatedAt: new Date
      },
      {
        name: 'Chá',
        createdAt: new Date(),
        updatedAt: new Date
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
