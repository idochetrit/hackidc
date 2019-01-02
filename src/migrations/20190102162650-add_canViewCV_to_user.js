'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Users", "canViewCV", Sequelize.BOOLEAN);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Users", "canViewCV", Sequelize.BOOLEAN);
  }
};
