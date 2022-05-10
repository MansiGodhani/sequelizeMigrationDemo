'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(async t => {
      try {
        console.info('No user is already in table, let fill it');
        await queryInterface.bulkInsert('Users', [
          {
              firstName: 'John',
              lastName: 'Doe',
              email: 'example@example.com',
              createdAt: new Date(),
              updatedAt: new Date()
          }
        ], {});
        return Promise.resolve();
      } catch (e) {
        return Promise.reject(e);
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
