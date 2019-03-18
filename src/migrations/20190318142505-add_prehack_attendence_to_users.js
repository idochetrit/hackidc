module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Users", "attendedPreHack", Sequelize.BOOLEAN);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Users", "attendedPreHack");
  }
};
