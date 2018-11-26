module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
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
        bio: {
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
        techExperience: {
          type: Sequelize.STRING
        },
        hearAboutUs: {
          type: Sequelize.STRING
        },
        shirtSize: {
          type: Sequelize.STRING
        },
        foodRestrictionType: {
          type: Sequelize.ARRAY(Sequelize.STRING)
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
        authToken: {
          type: Sequelize.STRING(2048)
        },
        cvFile: {
          type: Sequelize.BLOB
        },
        score: {
          allowNull: true,
          type: Sequelize.DOUBLE
        },
        isDeleted: {
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
      {}
    );
    await queryInterface.addIndex("Users", ["email"], { unique: true });
    await queryInterface.addIndex("Users", ["linkedInId"], { unique: true });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Users");
    await queryInterface.sequelize.query('DROP TYPE "enum_Users_registerStatus"');
  }
};
