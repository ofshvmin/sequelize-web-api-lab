'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const date = new Date()

    await queryInterface.bulkInsert('Horses', [{
      barn_name: 'Aspen',
      registered_name: 'Aspen Skipping Stone',
      age: 15,
      breed: 'Appaloosa',
      sex: 'Mare',
      status: 'Active',
      createdAt: date,
      updatedAt: date,

    }])

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Horses', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
