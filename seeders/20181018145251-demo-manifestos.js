'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('manifestos', 
      [
        {file_name: 'JCD_Rail_v1',screen_id: 3},
        {file_name: 'JCD_Rail_v2',screen_id: 3},
        {file_name: 'Exterion_Dx3',screen_id: 1},
        {file_name: 'CC_Adshel_v1',screen_id: 1},
        {file_name: 'JCD_westminster_towers_v1',screen_id: 2},
        {file_name: 'Gosh_Mosaic_v4.2',screen_id: 5},
        {file_name: 'JCD_Rail_v1',screen_id: 1},
        {file_name: 'test_card_linux_02',screen_id: 6},
      ], {});

  },

  down: (queryInterface, Sequelize) => {
      
      return queryInterface.bulkDelete('manifestos', null, {});    
  }
};
