"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          linkedInId: "linked1",
          name: "barack obama leader",
          email: "barackDontCallMe@obama.care",
          registerStatus: "approved",
          studyYear: 4,
          volunteerToAcceptLoner: false,
          experienceType: "senior developer",
          foodRestrictionType: "vegan",
          gender: "male",
          degreeType: "masters",
          cvAgree: true,
          hearAboutUs: "twitter",
          mobile: "0546381409",
          shirtSize: "m",
          fieldOfStudy: "politics",
          academicInstitute: "honolulu",
          roleId: 5,
          teamId: 1,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          linkedInId: "linked2",
          name: "maayan rossental",
          email: "m@hackidc.com",
          registerStatus: "review",
          studyYear: 2,
          volunteerToAcceptLoner: true,
          experienceType: "senior developer",
          foodRestrictionType: "none",
          gender: "female",
          degreeType: "first",
          cvAgree: true,
          hearAboutUs: "twitter",
          mobile: "0546381409",
          shirtSize: "s",
          fieldOfStudy: "bussiness",
          academicInstitute: "idc",
          roleId: 4,
          teamId: 1,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          linkedInId: "linked3",
          name: "niv shani",
          email: "n@hackidc.com",
          registerStatus: "approved",
          studyYear: 2,
          volunteerToAcceptLoner: true,
          experienceType: "senior developer",
          foodRestrictionType: "none",
          gender: "male",
          cvAgree: true,
          degreeType: "first",
          hearAboutUs: "twitter",
          mobile: "0546381409",
          shirtSize: "l",
          fieldOfStudy: "computers",
          academicInstitute: "idc",
          roleId: 4,
          teamId: 1,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          linkedInId: "linked4",
          name: "ido chetrit",
          email: "i@hackidc.com",
          registerStatus: "rejected",
          studyYear: 2,
          volunteerToAcceptLoner: true,
          experienceType: "senior developer",
          foodRestrictionType: "none",
          gender: "male",
          cvAgree: true,
          degreeType: "first",
          hearAboutUs: "twitter",
          mobile: "0546381409",
          shirtSize: "s",
          fieldOfStudy: "computers",
          academicInstitute: "idc",
          roleId: 4,
          teamId: 1,
          updatedAt: new Date(),
          createdAt: new Date()
        }
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Teams",
      [
        {
          title: "america inc.",
          description: "home for ~300 mil people!",
          builderId: 1,
          codeName: "chamois",
          codeNumber: 436,
          updatedAt: new Date(),
          createdAt: new Date()
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
    await queryInterface.bulkDelete("Teams", null, {});
  }
};
