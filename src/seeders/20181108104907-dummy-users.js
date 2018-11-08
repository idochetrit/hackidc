"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const updatedAt = new Date();
    const createdAt = updatedAt;
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: 1,
          linkedInId: "",
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
          updatedAt,
          createdAt
        },
        {
          id: 2,
          linkedInId: "",
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
          updatedAt,
          createdAt
        },
        {
          id: 3,
          linkedInId: "",
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
          updatedAt,
          createdAt
        },
        {
          id: 4,
          linkedInId: "",
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
          updatedAt,
          createdAt
        }
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Teams",
      [
        {
          id: 1,
          title: "america inc.",
          description: "home for ~300 mil people!",
          builderId: 1,
          code: 4536,
          updatedAt,
          createdAt
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
