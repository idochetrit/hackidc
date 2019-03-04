import * as animals from "animals";
import * as _ from "lodash";
import * as pluralize from "pluralize";
import { Sequelize } from "sequelize-typescript";
import { Team } from "../team.model";
import { ScoreService } from "../../concerns/scores/scoreService";
import { TeamScore } from "./teamscore.model";

const stagesSteps = {
  intial: "final",
  final: "done"
};

/**
 * @param {any} - either finalScore or
 *  {awesomnessScore, funcionalityScore, creativityScore, usabilityScore}
 * @returns {void} succeeded updating the correct record with the appropriate data
 */
export class TeamScoreService {
  public static async scoreTeamWithChallenge({
    team,
    judgeId,
    challengId,
    scoreData
  }: {
    team: Team;
    judgeId: number;
    challengId: number;
    scoreData: any;
  }) {
    // update score if not locked
    const teamScore = await this.findTeamScoreBy({ teamId: team.id, judgeId, challengId });
    const scoreService = new ScoreService(teamScore);
    await scoreService.score();
    return scoreService.finalize();
  }

  public static async lockTeamScores() {
    // bulk update to lock teams and increase the level.
    // update all the records (include challenges) to level -> final -> done
    const teamIdsToUpdate = await TeamScore.findAll({
      where: {
        locked: false
      },
      attributes: ["id"]
    });
    const updates = ["intial", "final"].map(level => {
      return TeamScore.update(
        { level: stagesSteps[level] },
        {
          where: {
            id: { $in: teamIdsToUpdate },
            level
          }
        }
      );
    });
    await Promise.all(updates);
  }

  public static async sortRankedTeams(): Promise<Team[]> {
    return [];
  }

  public static async calculateFinalWinningTeams() {}

  public static async qualifyingTeams() {
    //verify that there are level 'initial'
    // average the scores and sort them
  }

  public async createScoreRecord({ teamId, challengeId, judgeId }) {
    // default: level "initial"
    await TeamScore.create({
      level: "initial",
      locked: false,
      teamId,
      challengeId,
      judgeId
    });
  }

  private static async findTeamScoreBy({ teamId, judgeId, challengId }): Promise<TeamScore> {
    return TeamScore.findOne({
      where: { teamId: teamId, judgeId: judgeId, challengeId: challengId }
    });
  }
}
