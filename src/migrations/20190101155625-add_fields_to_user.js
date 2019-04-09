module.exports = {
  up: async (queryInterface, Sequelize) => {
    const tableDef = await queryInterface.describeTable("Users");
    if (!tableDef.password) await queryInterface.addColumn("Users", "password", Sequelize.STRING);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Users", "password", Sequelize.STRING);
  }
};
