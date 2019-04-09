module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Challenges", [{ name: "general" }], {});
    await queryInterface.addIndex("Challenges", ["name"], { unique: true });
  },

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete("Challenges", null, {})
};
