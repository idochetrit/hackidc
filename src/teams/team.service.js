import _ from "lodash";
import models from "../models";

const { Team } = models;

export const SANITIZED_FIELDS = ["title", "description", "challengeId"];

async function checkAvailability(code) {
  const team = await Team.findOne({ where: { code } });
  return team;
}
export default (() => {
  class TeamService {
    async create(attributes) {
      return attributes;
    }

    async generateTeamCode() {
      const generate = () => Math.floor(Math.random() * 10000);
      var generatedCode = generate();
      const team = await checkAvailability(generatedCode);
      if (team) {
        return this.generateTeamCode();
      } else {
        return generatedCode;
      }
    }

    sanitize(user) {
      const sanitizedParams = _.pick(user, ...SANITIZED_FIELDS);
      return sanitizedParams;
    }
  }

  return new TeamService();
})();
