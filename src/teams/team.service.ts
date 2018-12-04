import * as animals from "animals";
import * as _ from "lodash";
import * as pluralize from "pluralize";
import { Sequelize } from "sequelize-typescript";
import { User } from "../users/user.model";
import { Team } from "./team.model";
import { Challenge } from "../challenges/challenge.model";
import { handleError } from "../routers.helper";
import { UserService } from "../users/user.service";

export const SANITIZED_FIELDS = ["description", "codeNumber", "codeName", "challengeId"];
export const PATCH_SANITIZED_FIELDS = ["description"];

export class TeamService {
  public static async buildTeam({ builder, teamParams }: { builder: User; teamParams: any }) {
    try {
      const { challengeName } = teamParams;
      const { id: challengeId } = await Challenge.getByName(challengeName || "General");
      const newTeam = _.extend(
        {
          builderId: builder.id,
          challengeId
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

  public static async validateTeam(codeNumber: number) {
    //: Promise<{ valid: false; errorCode: string }>
    const team: Team = await this.findOneByCode(codeNumber);
    if (!team) {
      return {
        valid: false,
        errorCode: "team_not_found"
      };
    }
    // const users = await UserService.findByTeamId(team.id);
    // if (users.length >= 5) {
    //   return {
    //     valid: false,
    //     errorCode: "team_full"
    //   };
    // }
    return { valid: true, errorCode: null };
  }

  public static async findOneByCode(codeNumber: number) {
    const team = await Team.findOne({
      where: {
        codeNumber
      }
    });
    if (!team) {
      throw new Error(`Team with code: ${codeNumber}, not found.`);
    }
    return team;
  }

  public static async generateTeamCode() {
    const generateNumber = () => Math.floor(Math.random() * 899 + 100);
    const codeNumber = generateNumber();
    const codeName = pluralize(animals());
    const team = await this.checkAvailability({ codeNumber, codeName });
    if (team) {
      return this.generateTeamCode();
    }
    return { codeNumber, codeName };
  }

  public static getTeamCode(team: Team) {
    const { codeNumber, codeName } = team;
    return `${codeNumber}-${codeName}`;
  }

  public static sanitize(team: Team, { withDeps = false } = {}) {
    const sanitizedParams = _.pick(team, ...SANITIZED_FIELDS);
    return sanitizedParams;
  }

  public static extractTeamParams(params: any, sanitizedFields = SANITIZED_FIELDS) {
    return _.chain(params)
      .get("team")
      .pick(sanitizedFields)
      .mapValues(i => (typeof i === "string" ? _.toLower(i) : i))
      .omit("id")
      .value();
  }

  public static async updateTeam(team: Team, newAttributes: object) {
    await team.update(newAttributes).catch(err => {
      console.error(`Failed to update team #${team.codeNumber}`, err);
      return false;
    });
    return true;
  }

  public static async deleteTeam(id: number) {
    const team = await Team.findById(id);
    team.updateAttributes({ isDeleted: true });
  }

  private static async checkAvailability({
    codeNumber,
    codeName
  }: {
    codeNumber: number;
    codeName: string;
  }) {
    const team = await Team.findOne({
      where: Sequelize.or({ codeName }, { codeNumber })
    });
    return team;
  }
}
