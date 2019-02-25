'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const today = new Date();
    return queryInterface.bulkInsert('Clowns', [{
      nickname: 'clowntest',
      firstName: 'Clown Test',
      lastName: 'Clown Test',
      email: 'clown@test.com',
      password: '$2b$10$/pno5b2mVBjSWFqHNfSpgeX5cCDcQzlC1XX.4HBHHtSq7RDEvW842',
      image: '/assets/img/pluch.png',
      createdAt: today,
      updatedAt: today
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Clowns', null, {});
  }
};
