module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Users", "isReviewd", Sequelize.BOOLEAN);
    await queryInterface.addColumn("Users", "manualScore", Sequelize.DOUBLE);
    await queryInterface.addColumn("Teams", "isReviewd", Sequelize.BOOLEAN);
    await queryInterface.addColumn("Teams", "isAccepted", Sequelize.BOOLEAN);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Users", "isReviewd", Sequelize.BOOLEAN);
    await queryInterface.removeColumn("Users", "manualScore", Sequelize.DOUBLE);
    await queryInterface.removeColumn("Teams", "isReviewd", Sequelize.BOOLEAN);
    await queryInterface.removeColumn("Teams", "isAccepted", Sequelize.BOOLEAN);
  }
};
