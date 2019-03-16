module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Challenges",
      [{ name: "elbit" }, { name: "mizrahi" }, { name: "palantir" }],
      {}
    );
  },

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete("Challenges", null, {})
};
