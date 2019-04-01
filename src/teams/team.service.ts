import * as animals from "animals";
import * as _ from "lodash";
import * as pluralize from "pluralize";
import { Sequelize } from "sequelize-typescript";
import { User } from "../users/user.model";
import { Team } from "./team.model";
import { Challenge, CHALLENGES } from "../challenges/challenge.model";
import { UserService } from "../users/user.service";
import { SANITIZED_PUBLIC_FIELDS } from "../users/user.constants";
import * as Sentry from "@sentry/node";

export const SANITIZED_FIELDS = [
  "description",
  "codeNumber",
  "codeName",
  "isRSVP",
  "isPreHackRSVP",
  "requiredEquipment",
  "classRoom",
  "challengeId",
  "users"
];
export const PATCH_SANITIZED_FIELDS = ["description", "requiredEquipment", "challengeId"];
export const TEAM_CAPACITY: number = Number(process.env.TEAM_CAPACITY) || 5;
export class TeamService {
  public static async buildTeam({ builder, teamParams }: { builder: User; teamParams: any }) {
    try {
      const { challengeName } = teamParams;
      const { id: defaultChallengeId } = await Challenge.getByName(challengeName || "General");
      const newTeam = _.extend(
        {
          builderId: builder.id,
          defaultChallengeId
        },
        teamParams
      );
      const { codeName, codeNumber } = newTeam;
      const [team] = await Team.findOrCreate({
        defaults: newTeam,
        where: { codeNumber, codeName }
      });
      return team;
    } catch (err) {
      console.error(`Failed to create user: ${err.message}, ${err.stack}`);
      throw err;
    }
  }

  public static async validateTeam(
    codeNumber: number
  ): Promise<{ valid: boolean; errorCode: string }> {
    const team: Team = await this.findOneByCode(codeNumber).catch(() => null);
    if (!team) {
      return {
        valid: false,
        errorCode: "team_not_found"
      };
    }
    const users: User[] = await UserService.findUsersByTeamId(team.id);
    if (users.length + 1 > TEAM_CAPACITY) {
      return {
        valid: false,
        errorCode: "team_full"
      };
    }
    return { valid: true, errorCode: null };
  }

  public static async findOneByCode(codeNumber: number): Promise<Team> {
    const team = await Team.findOne({ where: { codeNumber } });
    if (!team) {
      throw new Error(`Team with code: ${codeNumber}, not found.`);
    }
    return team;
  }

  public static async getAllChallenges(): Promise<any[]> {
    const challenges: Challenge[] = await Challenge.findAll({
      where: { name: { $ne: CHALLENGES.GENERAL } } // exclude general challenge
    });
    return _.map(challenges, challenge => _.pick(challenge, "id", "name")); // sanitized challenges
  }

  public static async generateTeamCode(): Promise<{ codeNumber: number; codeName: string }> {
    const generateNumber = () => Math.floor(Math.random() * 899 + 100);
    const codeNumber = generateNumber();
    const codeName = pluralize(animals());
    const team = await this.checkAvailability({ codeNumber, codeName });
    if (!_.isNull(team)) {
      console.log("retries building team... ", codeName, codeNumber);
      return await this.generateTeamCode();
    }
    return { codeNumber, codeName };
  }

  public static getTeamCode(team: Team) {
    const { codeNumber, codeName } = team;
    return `${codeNumber}-${codeName}`;
  }

  public static async sanitize(team: Team, { withDeps = true } = {}) {
    if (!team) return {};
    let sanitizedParams: any = _.pick(team, ...SANITIZED_FIELDS);

    // add users
    if (withDeps) {
      const users: User[] = await UserService.findUsersByTeamId(team.id);
      const sanitizedUsers: any = await Promise.all(
        users.map(user => {
          return UserService.sanitize(user, SANITIZED_PUBLIC_FIELDS, { withDeps: false });
        })
      );
      sanitizedParams.users = sanitizedUsers;

      sanitizedParams.challengeName = ((await team.$get("Challenge")) as Challenge).name;
    }

    return sanitizedParams;
  }

  public static extractTeamParams(params: any, sanitizedFields = SANITIZED_FIELDS) {
    return _.chain(params)
      .get("team")
      .pick(sanitizedFields)
      .mapValues((v, k) => (k === "codeName" ? _.toLower(v) : v))
      .omit("id")
      .value();
  }

  public static async updateTeam(team: Team, newAttributes: object): Promise<boolean> {
    await team.update(newAttributes).catch(err => {
      console.error(`Failed to update team #${team.codeNumber}`, err);
      return false;
    });
    return true;
  }

  public static async updateTeamChallenge(team: Team, challengeName: string): Promise<boolean> {
    const { id: challengeId } = await Challenge.getByName(challengeName);
    return this.updateTeam(team, { challengeId });
  }

  public static async deleteTeam(id: number) {
    const team = await Team.findById(id);
    await team.updateAttributes({ isDeleted: true });
  }

  public static async updateRSVP(userId: number, team: Team, rsvpFlag: boolean, field: string) {
    const isRSVP = team[field];
    if (team.builderId !== userId) {
      Sentry.captureMessage(`user #${userId} is not TeamBuilder of ${team.codeNumber}`);
      return [false, isRSVP];
    }
    if (_.isBoolean(isRSVP)) return [false, isRSVP];
    await team.update({ [field]: rsvpFlag });
    return [true, rsvpFlag];
  }

  private static async checkAvailability({
    codeNumber,
    codeName
  }: {
    codeNumber: number;
    codeName: string;
  }): Promise<Team> {
    const team = await Team.findOne({
      where: Sequelize.or({ codeName }, { codeNumber })
    });
    return team;
  }
}
