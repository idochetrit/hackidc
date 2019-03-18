const { sequelize } = require("../../dist/db/sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await sequelize.sync();
    await queryInterface.addIndex("TeamScores", ["teamCodeNumber"]);
    await queryInterface.addIndex("TeamScores", ["judgeId"]);
    await queryInterface.addIndex("TeamScores", ["judgeId", "teamCodeNumber", "challengeId"], {
      unique: true
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("TeamScores");
  }
};
