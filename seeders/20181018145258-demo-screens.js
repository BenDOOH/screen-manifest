'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('screens', 
      [
        {os: "Windows",section: "Beta"},
        {os: "Linux",section: "Beta"},
        {os: "Linux",section: "Beta"},
        {os: "Windows",section: "Alpha"},
        {os: "Linux",section: "Alpha"},
        {os: "Linux",section: "Alpha"},
      ], {});
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('screens', null, {});
    
  }
};
