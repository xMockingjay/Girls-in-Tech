'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Addresses', [
      {
        postalCode: '55555-555',
        street: 'Rua dos Vingadores',
        number: 854,
        state: 'RS',
        city: 'Pelotas',
        latitude: '954136',
        longitude: '741258',
        merchant_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        postalCode: '99999-999',
        street: 'Rua dos Elfos',
        number: 854,
        state: 'RS',
        city: 'Pelotas',
        latitude: '954136',
        longitude: '741258',
        merchant_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Addresses', null, {});
  }
};

