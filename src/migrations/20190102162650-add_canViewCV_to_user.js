module.exports = {
  up: async (queryInterface, Sequelize) => {
    const tableDef = await queryInterface.describeTable("Users");
    if (!tableDef.canViewCV)
      await queryInterface.addColumn("Users", "canViewCV", Sequelize.BOOLEAN);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Users", "canViewCV", Sequelize.BOOLEAN);
  }
};
