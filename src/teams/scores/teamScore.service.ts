import { Team } from "../team.model";
import { ScoreService } from "../../concerns/scores/scoreService";
import { TeamScore } from "./teamscore.model";
import { Challenge } from "../../challenges/challenge.model";

const stagesSteps = {
  intial: "final",
  final: "done"
};

/**
 * @param {any} - either finalScore or
 *      {awesomnessScore, functionalityScore, creativityScore, usabilityScore}
 * @returns {void} succeeded updating the correct record with the appropriate data
 */
export class TeamScoreService {
  public static async scoreTeamWithChallenge({
    team,
    judgeId,
    challengeName,
    scoreData
  }: {
    team: Team;
    judgeId: number;
    challengeName: string;
    scoreData: any;
  }) {
    // update score if not locked
    const { id: challengeId } = await this.findChallengeByName(challengeName);
    const teamScore = await this.findTeamScoreBy({ teamId: team.id, judgeId, challengeId });
    const scoreService = new ScoreService(teamScore);
    await scoreService.score(scoreData);
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

  public static async unlockTeamScores() {
    // bulk update to unlock all the teams and increase the level.

    return TeamScore.update(
      { locked: false },
      {
        where: {
          locked: true
        }
      }
    );
  }

  public async createScoreRecord({ teamId, challengeId, judgeId }) {
    await TeamScore.create({
      level: "initial",
      locked: false,
      teamId,
      challengeId,
      judgeId
    });
  }

  private static async findTeamScoreBy({ teamId, judgeId, challengeId }): Promise<TeamScore> {
    return TeamScore.findOne({
      where: { teamId, judgeId, challengeId }
    });
  }

  private static async findChallengeByName(challengeName: string): Promise<Challenge> {
    return Challenge.findOne({
      where: {
        name: challengeName
      }
    });
  }
}
