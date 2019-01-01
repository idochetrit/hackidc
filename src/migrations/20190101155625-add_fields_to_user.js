'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Users", "password", Sequelize.VARCHAR(256));
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Users", "password", Sequelize.VARCHAR(256));
  }
};
