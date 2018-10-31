"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    const createdAt = new Date();
    const updatedAt = createdAt;
    return queryInterface.bulkInsert(
      "Roles",
      [
        { name: "Admin" },
        { name: "Mentor" },
        { name: "Judge" },
        { name: "Participant" },
        { name: "TeamBuilder" }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("Roles", null, {})
};
