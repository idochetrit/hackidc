import _ from "lodash";

import models from "../models";
import TeamService from "../teams/team.service";
import userRole from "./user.role";
import teamService from "../teams/team.service";

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
        where: { linkedInId: { $eq: defaultAttrs.linkedInId } },
        defaults: defaultAttrs
      }).spread((user, _created) => user);
    }

    async finishRegistration({ user, userParams, teamParams }) {
      if (_.isUndefined(userParams.isTeamBuilder)) {
        throw new Error("Bad user attributes: isTeamBuilder is undefined");
      }

      const roleName = userParams.isTeamBuilder ? "TeamBuilder" : "Participant";
      delete userParams.isTeamBuilder;

      // HERE: build team logic
      const { code } = teamParams;
      if (roleName === "TeamBuilder") {
        await teamService.buildTeam({ builder: user, teamParams });
      }
      await this.connectToTeam({ user, code });

      const { id: roleId } = await userRole.getByName(roleName);
      const extendedAttrs = _.extend(userParams, {
        registerStatus: "review",
        roleId
      });
      const updatedUser = await user
        .update(extendedAttrs)
        .catch(err =>
          console.error(
            `Failed to save user: (Error - ${err.message}) ${err.stack}`
          )
        );
      return updatedUser;
    }

    async sanitize(user) {
      const sanitizedParams = _.pick(user, ...SANITIZED_FIELDS);
      const [role, team] = await Promise.all([user.getRole(), user.getTeam()]);

      sanitizedParams.role = role.name;
      sanitizedParams.team = teamService.sanitize(team);
      return sanitizedParams;
    }

    extractUserParams(params) {
      return _.chain(params)
        .get("user")
        .pick(SANITIZED_FIELDS)
        .mapValues(i => (typeof i == "string" ? _.toLower(i) : i))
        .omit("id", "linkedInId", "role", "team")
        .value();
    }

    async connectToTeam({ user, code }) {
      const team = await teamService.findByCode(code);
      await user.update({ teamId: team.id });
      return user;
    }

    findById(id) {
      return User.findByPk(id);
    }
  }

  return new UserService();
})();
