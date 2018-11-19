import _ from "lodash";

import models from "../models";
import userRole from "./user.role";
import teamService from "../teams/team.service";

const { User } = models;

export const SANITIZED_FIELDS = [
  "id",
  "linkedInId",
  "name",
  "email",
  "userPicture",
  "registerStatus",
  "studyYear",
  "isStudent",
  "volunteerToAcceptLoner",
  "experienceType",
  "foodRestrictionType",
  "gender",
  "degreeType",
  "hearAboutUs",
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
    createLinkedInUser(profile) {
      const defaultAttrs = {
        linkedInId: _.get(profile, "id"),
        name: _.get(profile, "displayName"),
        email: _.get(profile, "emails[0].value"),
        userPicture: _.get(profile, "photos[0].value"),
        rawLinkedin: profile._raw,
        registerStatus: "pending"
      };
      return User.findOrCreate({
        where: { linkedInId: { $eq: defaultAttrs.linkedInId } },
        defaults: defaultAttrs
      })
        .spread((user, _created) => user)
        .catch(err => {
          console.log(err, defaultAttrs);
        });
    }

    async finishRegistration({ user, userParams, teamParams }) {
      if (_.isUndefined(userParams.isTeamBuilder)) {
        throw new Error("Bad user attributes: isTeamBuilder is undefined");
      }

      const roleName = userParams.isTeamBuilder ? "TeamBuilder" : "Participant";
      delete userParams.isTeamBuilder;

      // HERE: build team logic
      const { code } = teamParams;
      let team;
      if (roleName === "TeamBuilder") {
        team = await teamService.buildTeam({ builder: user, teamParams });
      }
      await this.connectToTeam({ user, code, team });

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
      if (team) {
        // optimize later sanitized team attribute
        user.team = teamService.sanitize(team);
      }
      return updatedUser;
    }

    async sanitize(user) {
      const sanitizedParams = _.pick(user, ...SANITIZED_FIELDS);
      const [role, team] = await Promise.all([
        user.getRole(),
        user.team || user.getTeam()
      ]);

      sanitizedParams.role = _.get(role, "name");
      sanitizedParams.team = team && teamService.sanitize(team);
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

    async connectToTeam({ user, code, team }) {
      const { id: teamId } = team || (await teamService.findByCode(code));

      await user.update({ teamId });
      return user;
    }

    async updateCV({ user, fileParams }) {
      console.log("Uplading", fileParams.mimetype, fileParams.name);
      if (fileParams.mimetype !== "application/pdf") {
        throw new Error("File type is not PDF");
      }

      // in MB
      if (fileParams.data.byteLength / 1000000 >= 5) {
        throw new Error("File size is greater than 5 Mb");
      }

      await user.update({ cvFile: fileParams.data });
    }

    findById(id) {
      return User.findByPk(id);
    }
  }

  return new UserService();
})();
