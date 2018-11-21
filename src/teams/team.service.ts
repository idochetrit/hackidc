import * as animals from "animals";
import * as _ from "lodash";
import { Sequelize } from "sequelize-typescript";
import { User } from "../users/user.model";
import { Team } from "./team.model";


export const SANITIZED_FIELDS = [
  "title",
  "description",
  "codeNumber",
  "codeName"
];

export class TeamService {
  public static async create(attributes) {
    return attributes;
  }

  public static async buildTeam({ builder, teamParams }: {builder: User, teamParams: any}) {
    try {
      const newTeam = _.extend({ builderId: builder.id }, teamParams);
      const [team] = await Team.findOrCreate({
        defaults: newTeam,
        where: { codeNumber: { $eq: newTeam.code } }
      });
      return team;
    } catch (err) {
      console.error(`Failed to create user: ${err.message}, ${err.stack}`);
      throw err;
    }
  }

  public static async findByCode(codeNumber: number, codeName: string) {
    const team = await Team.findOne({
      where:Sequelize.and({codeNumber}, {codeName})
    });
    if (!team) {
      throw new Error(`Team with code: ${codeNumber}-${codeName}, not found.`);
    }
    return team;
  }

  public static async generateTeamCode() {
    const generateNumber = () => Math.floor(Math.random() * 899 + 100);
    const codeNumber = generateNumber();
    const codeName = animals();
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

  public static sanitize(team: Team) {
    const sanitizedParams = _.pick(team, ...SANITIZED_FIELDS);
    return sanitizedParams;
  }

  public static extractTeamParams(params: any) {
    return _.chain(params)
      .get("team")
      .pick(SANITIZED_FIELDS)
      .mapValues(i => (typeof i === "string" ? _.toLower(i) : i))
      .omit("id")
      .value();
  }

  public static async deleteTeam(id:number){
    const team = await Team.findById(id);
    team.updateAttributes({isDeleted: true});
  }
  
  private static async checkAvailability({ codeNumber, codeName }: {codeNumber: number, codeName: string}) {
    const team = await Team.findOne({
      where: Sequelize.or({codeName},{codeNumber})
    });
    return team;
  }
}
