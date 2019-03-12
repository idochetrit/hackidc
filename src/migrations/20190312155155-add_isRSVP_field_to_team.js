module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Teams", "isRSVP", Sequelize.BOOLEAN);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Teams", "isRSVP");
  }
};
