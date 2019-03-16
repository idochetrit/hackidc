module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Teams", "isPreHackRSVP", Sequelize.BOOLEAN);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Teams", "isPreHackRSVP");
  }
};
