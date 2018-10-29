'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      const now = new Date();

      return queryInterface.bulkInsert('Parties', [{
        id: 1,
        name: 'Sozialdemokratische Partei Deutschlands',
        shortname: 'SPD',
        createdAt: now,
        updatedAt: now,
      },
      {
        id: 2,
        name: 'Christlich Demokratische Union',
        shortname: 'CDU',
        createdAt: now,
        updatedAt: now
      },
      {
        id: 3,
        name: 'Christlich Soziale Union',
        shortname: 'CSU',
        createdAt: now,
        updatedAt: now
      },
      {
        id: 4, 
        name: 'Freie Demokratische Partei',
        shortname: 'FDP',
        createdAt: now,
        updatedAt: now
      },
      {id: 5, 
        name: 'Bündnis90/Die Grünen',
        shortname: 'GRÜNE',
        createdAt: now,
        updatedAt: now
      },
      {id: 6,
        name: 'Die Linke',
        shortname: 'Linke',
        createdAt: now,
        updatedAt: now
      },
      { id: 7,
        name: 'Alternative für Deutschland',
        shortname: 'AFD',
        createdAt: now,
        updatedAt: now
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
