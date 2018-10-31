"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable("Teams", {
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
      codeNumber: {
        type: Sequelize.NUMBER
      },
      leaderId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable("Teams")
};
