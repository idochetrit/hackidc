const { sequelize } = require("../../dist/db/sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await sequelize.sync();
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("TeamScores");
    await queryInterface.dropTable("Favorites");
  }
};
