'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('OpeningHours', [
      {
        days: 'Wednesday to Sunday',
        open: '19:00',
        close: '23:00',
        merchant_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        days: 'Monday to Friday',
        open: '12:00',
        close: '18:00',
        merchant_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        days: 'Tuesday to Saturday',
        open: '10:00',
        close: '19:00',
        merchant_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        days: 'Thursday to Monday',
        open: '20:00',
        close: '03:00',
        merchant_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('OpeningHours', null, {});
  }
};
