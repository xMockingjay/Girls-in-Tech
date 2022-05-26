'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Merchants', [
      {
        name: "Outback Not Brand",
        isBrand: false,
        brand_id: 1,
        averageTicket: 300000,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Outback Brand",
        isBrand: true,
        brand_id: 1,
        averageTicket: 500000,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Rei do Mate Not Brand",
        isBrand: false,
        brand_id: 2,
        averageTicket: 200000,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Merchants', null, {});
  }
};
