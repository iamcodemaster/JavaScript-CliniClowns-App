'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const today = new Date();
    return queryInterface.bulkInsert('Users', [{
      firstName: 'User Test',
      lastName: 'User Test',
      email: 'user@test.com',
      password: '$2b$10$/pno5b2mVBjSWFqHNfSpgeX5cCDcQzlC1XX.4HBHHtSq7RDEvW842',
      createdAt: today,
      updatedAt: today
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
