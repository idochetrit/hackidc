"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable(
      "Users",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING
        },
        email: {
          type: Sequelize.STRING
        },
        userPicture: {
          type: Sequelize.STRING
        },
        gender: {
          type: Sequelize.STRING
        },
        mobile: {
          type: Sequelize.STRING
        },
        degreeType: {
          type: Sequelize.STRING
        },
        fieldOfStudy: {
          type: Sequelize.STRING
        },
        academicInstitute: {
          type: Sequelize.STRING
        },
        studyYear: {
          allowNull: true,
          type: Sequelize.INTEGER
        },
        experienceType: {
          type: Sequelize.STRING
        },
        hearAboutUs: {
          type: Sequelize.STRING
        },
        shirtSize: {
          type: Sequelize.STRING
        },
        foodRestrictionType: {
          type: Sequelize.STRING
        },
        volunteerToAcceptLoner: {
          type: Sequelize.BOOLEAN
        },
        cvAgree: {
          type: Sequelize.BOOLEAN
        },
        roleId: {
          allowNull: true,
          type: Sequelize.INTEGER
        },
        teamId: {
          allowNull: true,
          type: Sequelize.INTEGER
        },
        linkedInId: {
          type: Sequelize.STRING
        },
        registerStatus: {
          type: Sequelize.ENUM,
          values: ["approved", "review", "pending", "rejected"]
        },
        rawLinkedin: {
          type: Sequelize.JSONB
        },
        cvFile: {
          type: Sequelize.BLOB("long")
        },
        cvAgree: {
          type: Sequelize.BOOLEAN
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      },
      {
        indexes: [
          {
            unique: true,
            fields: ["email"]
          },
          {
            unique: true,
            fields: ["linkedInId"]
          }
        ]
      }
    ),
  down: (queryInterface, Sequelize) => {
    queryInterface.dropTable("Users");
    queryInterface.sequelize.query('DROP TYPE "enum_Users_registerStatus"');
  }
};
