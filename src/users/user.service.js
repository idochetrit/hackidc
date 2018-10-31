import _ from "lodash";

import models from "../models";

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
  "teamId"
];
export default (() => {
  class UserService {
    finishRegistration(userId, userAttrs) {
      const newUser = _.extend({ registerStatus: "review" }, userAttrs);
      return this.findById(userId)
        .then(user => user.updateAttributes(newUser))
        .catch(err => {
          console.log(`failed to save user: (Error - ${err})`);
        });
    }

    registerWithLinkedIn(profile) {
      const defaultAttrs = {
        linkedInId: _.get(profile, "id"),
        name: _.get(profile, "displayName"),
        email: _.get(profile, "emails[0].value"),
        rawLinkedin: profile,
        registerStatus: "pending"
      };
      return models.User.findOrCreate({
        where: { linkedInId: defaultAttrs.linkedInId },
        defaults: defaultAttrs
      }).spread((user, created) => user);
    }

    sanitize(user) {
      const sanitizedParams = _.pick(user, ...SANITIZED_FIELDS);
      return sanitizedParams;
    }

    findById(id) {
      return models.User.findByPk(id);
    }
  }

  return new UserService();
})();
