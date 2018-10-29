'use strict';
const data = require('../node_modules/@bundesfeeds/bundestag-daten/bt19.json');

module.exports = {
  up: (queryInterface, Sequelize) => {

    
    const parties = {
      'SPD': 1,
      'CDU': 2,
      'CSU': 3, 
      'FDP': 4,
      'GRÜNE': 5,
      'LINKE': 6,
      'AFD': 7,
    };

    const persons = data.map(person => {
      const now = new Date();
   
      return {
        firstname: person.vorname,
        lastname: person.nachname,
        partiesId: parties[person.partei],
        url: person.websiteurl || '',
        createdAt: now, 
        updatedAt: now
      }
    });
      
    
    return queryInterface.bulkInsert('Persons', persons);
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
