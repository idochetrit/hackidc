const createJudges = require("../../dist/users/judges/judge.bulk_utils").createJudges;
const { FINAL_JUDGES } = require("../../dist/users/judges/judge.service");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await createJudges(100);
    await createJudges(null, FINAL_JUDGES);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`DELETE from "Users" WHERE "roleId" = 3`);
  }
};
