import _ from "lodash";
import animals from "animals";
import models from "../models";

const { Team } = models;

export const SANITIZED_FIELDS = [
  "title",
  "description",
  "challengeId",
  "builderId",
  "code"
];

async function checkAvailability(code) {
  const team = await Team.findOne({ where: { code: { $eq: code } } });
  return team;
}

export default (() => {
  class TeamService {
    async create(attributes) {
      return attributes;
    }

    async buildTeam({ builder, teamParams }) {
      try {
        const newTeam = _.extend({ builderId: builder.id }, teamParams);
        const [team, _saved] = await Team.findOrCreate({
          where: { code: { $eq: newTeam.code } },
          defaults: newTeam
        });
        return team;
      } catch (err) {
        console.error(`Failed to create user: ${err.message}, ${err.stack}`);
        throw err;
      }
    }

    async findByCode(code) {
      const team = await Team.findOne({
        where: { code: { $eq: code } }
      });
      if (!team) {
        throw new Error(`Team with code: ${code}, not found.`);
      }
      return team;
    }

    async generateTeamCode() {
      const generateNumber = () => Math.floor(Math.random() * 899 + 100);
      var generatedCode = `${generateNumber()}-${animals()}`;
      const team = await checkAvailability(generatedCode);
      if (team) {
        return this.generateTeamCode();
      } else {
        return generatedCode;
      }
    }

    sanitize(team) {
      const sanitizedParams = _.pick(team, ...SANITIZED_FIELDS);
      return sanitizedParams;
    }

    extractTeamParams(params) {
      return _.chain(params)
        .get("team")
        .pick(SANITIZED_FIELDS)
        .mapValues(i => (typeof i == "string" ? _.toLower(i) : i))
        .omit("id")
        .value();
    }
  }

  return new TeamService();
})();
