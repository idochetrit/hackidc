const createJudges = require("../../dist/users/judges/judge.bulk_utils").createJudges;
const createMentors = require("../../dist/users/judges/judge.bulk_utils").createMentors;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await createJudges(50, 100);
    await createMentors(150);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`DELETE from "Users" WHERE "roleId" = 3 OFFSET 110`);
    await queryInterface.sequelize.query(`DELETE from "Users" WHERE "roleId" = 2`);
  }
};
