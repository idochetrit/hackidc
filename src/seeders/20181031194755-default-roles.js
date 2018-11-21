"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Roles",
      [
        { name: "Admin" },
        { name: "Mentor" },
        { name: "Judge" },
        { name: "Loner" },
        { name: "Participant" },
        { name: "TeamBuilder" }
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("Roles", null, {})
};
