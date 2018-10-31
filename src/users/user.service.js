import _ from "lodash";

import models from "../models";

const { User, Role } = models;

export const SANITIZED_FIELDS = [
  "id",
  "linkedInId",
  "name",
  "email",
  "registerStatus",
  "studyYear",
  "isStudent",
  "volunteerToAcceptLoner",
  "experienceType",
  "foodRestrictionType",
  "roleId",
  "gender",
  "degreeType",
  "hearAboutUS",
  "mobile",
  "shirtSize",
  "fieldOfStudy",
  "academicInstitute",
  "teamId",
  "isTeamBuilder"
];

const getRoleId = roleName =>
  Role.findOne({ where: { name: roleName }, attributes: ["id"] }).then(
    role => role.id
  );
export default (() => {
  class UserService {
    registerWithLinkedIn(profile) {
      const defaultAttrs = {
        linkedInId: _.get(profile, "id"),
        name: _.get(profile, "displayName"),
        email: _.get(profile, "emails[0].value"),
        rawLinkedin: profile._raw,
        registerStatus: "pending"
      };
      return User.findOrCreate({
        where: { linkedInId: defaultAttrs.linkedInId },
        defaults: defaultAttrs
      }).spread((user, _created) => user);
    }

    finishRegistration(user, userAttrs) {
      if (_.isUndefined(userAttrs.isTeamBuilder)) {
        throw new Error("Bad user attributes: isTeamBuilder is undefined");
      }

      const newRole = userAttrs.isTeamBuilder ? "TeamBuilder" : "Participant";
      delete userAttrs.isTeamBuilder;

      return Promise.all([user, getRoleId(newRole)])
        .then(([user, roleId]) => {
          const newUser = _.extend(userAttrs, {
            registerStatus: "review",
            roleId
          });
          return user.updateAttributes(newUser);
        })
        .catch(err => {
          console.log(
            `Failed to save user: (Error - ${err.message}) ${err.stack}`
          );
        });
    }

    sanitize(user) {
      const sanitizedParams = _.pick(user, ...SANITIZED_FIELDS);
      return sanitizedParams;
    }

    findById(id) {
      return User.findByPk(id);
    }
  }

  return new UserService();
})();
