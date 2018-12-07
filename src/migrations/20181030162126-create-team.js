module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addIndex("Teams", ["codeNumber"], { unique: true });
    await queryInterface.addIndex("Teams", ["codeName"], { unique: true });
    await queryInterface.addIndex("Teams", ["challengeId"]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Teams");
  }
};
