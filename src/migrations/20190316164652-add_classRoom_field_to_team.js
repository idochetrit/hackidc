module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Teams", "classRoom", Sequelize.STRING);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Teams", "classRoom");
  }
};
