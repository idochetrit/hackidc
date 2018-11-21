"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Teams", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      challengeId: {
        type: Sequelize.INTEGER
      },
      codeName: {
        type: Sequelize.STRING
      },
      codeNumber: {
        type: Sequelize.INTEGER
      },
      builderId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      isDeleted: {
        type: Sequelize.BOOLEAN
      }
    });
    await queryInterface.addIndex("Teams", ["codeNumber"], { unique: true });
    await queryInterface.addIndex("Teams", ["codeName"], { unique: true });
    await queryInterface.addIndex("Teams", ["challengeId"]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Teams");
  }
};
