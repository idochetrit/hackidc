const { sequelize } = require("../../dist/db/sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await sequelize.sync({ force: true });
  },
  down: (queryInterface, Sequelize) => queryInterface.dropTable("Roles")
};
