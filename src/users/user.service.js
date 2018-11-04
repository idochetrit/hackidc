import _ from "lodash";

import models from "../models";
import TeamService from "../teams/team.service";
import userRole from "./user.role";

const { User } = models;

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
  "gender",
  "degreeType",
  "hearAboutUS",
  "mobile",
  "shirtSize",
  "fieldOfStudy",
  "academicInstitute",
  "isTeamBuilder",
  "role",
  "team"
];

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

    async finishRegistration(user, userAttrs) {
      if (_.isUndefined(userAttrs.isTeamBuilder)) {
        throw new Error("Bad user attributes: isTeamBuilder is undefined");
      }

      const roleName = userAttrs.isTeamBuilder ? "TeamBuilder" : "Participant";
      delete userAttrs.isTeamBuilder;

      const { id: roleId } = await userRole.getByName(roleName);
      const extendedAttrs = _.extend(userAttrs, {
        registerStatus: "review",
        roleId
      });
      const updatedUser = await user
        .update(extendedAttrs)
        .catch(err =>
          console.log(
            `Failed to save user: (Error - ${err.message}) ${err.stack}`
          )
        );
      return updatedUser;
    }

    async sanitize(user) {
      const sanitizedParams = _.pick(user, ...SANITIZED_FIELDS);
      const [role, team] = await Promise.all([user.getRole(), user.getTeam()]);

      sanitizedParams.role = role.name;
      sanitizedParams.team = TeamService.sanitize(team);
      return sanitizedParams;
    }

    findById(id) {
      return User.findByPk(id);
    }
  }

  return new UserService();
})();
