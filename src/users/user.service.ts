import * as _ from "lodash";

import { Role } from "../roles/role.model";
import { Team } from "../teams/team.model";
import { TeamService } from "../teams/team.service";
import { User } from "./user.model";
import userRole from "./user.role";
import UserScore from "./user.score";

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
  "techExperience",
  "foodRestrictionType",
  "gender",
  "degreeType",
  "hearAboutUs",
  "mobile",
  "shirtSize",
  "fieldOfStudy",
  "academicInstitute",
  "cvAgree",
  "role",
  "team"
];

export class UserService {
  public static createLinkedInUser(profile: any, authToken: string) {
    const defaultAttrs = {
      email: _.get(profile, "emails[0].value"),
      linkedInId: _.get(profile, "id"),
      name: _.get(profile, "displayName"),
      rawLinkedin: profile._raw,
      registerStatus: "pending",
      userPicture: _.get(profile, "photos[0].value"),
      authToken
    };

    return User.findOrCreate({
      defaults: defaultAttrs,
      where: { linkedInId: { $eq: defaultAttrs.linkedInId } },
    })
      .spread((user: any, _created: any) => user)
      .catch((err: Error) => {
        console.log(err, defaultAttrs);
      });
  }

  public static async finishRegistration({
    user,
    userParams,
    teamParams
  }: {
    user: any;
    userParams: any;
    teamParams: any;
  }) {
    if (!user) {
      throw new Error("No user authenticated: user object is undefined");
    }
    
    if (_.isUndefined(userParams.role)) {
      throw new Error("Bad user attributes: role is undefined");
    }

    const roleName = _.chain(userParams.role).startCase().split(' ').join('').value();
    delete userParams.role;

    // HERE: build team logic
    const { codeNumber } = teamParams;
    let team;
    if (roleName === "TeamBuilder") {
      team = await TeamService.buildTeam({ builder: user, teamParams });
    } else if (roleName !== "Loner") {
      await this.connectToTeam({ user, codeNumber, team });
    }
    const { id: roleId } = await userRole.getByName(roleName);

    const extendedAttrs = _.extend(userParams, {
      registerStatus: "review",
      roleId
    });
    const updatedUser = await user
      .update(extendedAttrs)
      .catch((err: Error) =>
        console.error(
          `Failed to save user: (Error - ${err.message}) ${err.stack}`
        )
      );
    await this.updateUserScore(user);
    if (team) {
      // optimize later sanitized team attribute
      user.team = TeamService.sanitize(team);
    }
    return updatedUser;
  }

  public static async sanitize(user: User) {
    if (!user) { return null; }
    const sanitizedParams = _.pick(user, ...SANITIZED_FIELDS);
    const role = await user.$get("role");
    const team:Team = user.team || await user.$get("team") as Team;

    sanitizedParams.role = _.get(role, 'name') || "Unavailable";
    sanitizedParams.team = TeamService.sanitize(team);
    return sanitizedParams;
  }

  public static extractUserParams(params: any) {
    return _.chain(params)
      .get("user")
      .pick(SANITIZED_FIELDS)
      .mapValues(i => (typeof i === "string" ? _.toLower(i) : i))
      .omit("id", "linkedInId", "team")
      .value();
  }

  public static async connectToTeam({
    user,
    codeNumber,
    team
  }: {
    user: User;
    codeNumber: number;
    team: any;
  }) {
    const { id: teamId } = team || (await TeamService.findByCode(codeNumber));

    await user.update({ teamId });
    return user;
  }

  public static async updateCV({ user, fileParams }: { user: any; fileParams: any }) {
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

  public static async findById(id: number, {includeDeps = false}:{includeDeps?: boolean} = {}) {
    let includes = [];
    if (includeDeps) {
      includes = [Team, Role];
    }
    const user = await User.findOne({
      where: { id },
      include:includes 
    });

    if (!user) {
      throw new Error("No user found!");
    }
    return user;
  }
  
  public static async deleteUser(id: number){
  const user = await User.findById(id);
    user.updateAttributes({isDeleted: true});
  }

  private static async updateUserScore(user: User) {
    return await user.updateAttributes({
      score: UserScore.calculateScore(user)
    });
  }
  
}