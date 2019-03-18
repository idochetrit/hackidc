import { ScoreService } from "../../concerns/scores/scoreService";
import { TeamScore } from "./teamscore.model";
import { Challenge } from "../../challenges/challenge.model";
import * as _ from "lodash";

const stagesSteps = {
  intial: "final",
  final: "done"
};

const SANITIZED_FIELDS = ["judeId", "teamId", "challengeId", "challengeName"];

/**
 * @param {any} - either finalScore or
 *      {awesomenessScore, functionalityScore, creativityScore, usabilityScore}
 * @returns {void} succeeded updating the correct record with the appropriate data
 */
export class TeamScoreService {
  public static async scoreTeamWithChallenge({
    teamCodeNumber,
    judgeId,
    challengeName,
    scoreData
  }: {
    teamCodeNumber: number;
    judgeId: number;
    challengeName: string;
    scoreData: any;
  }) {
    // update score if not locked
    const { id: challengeId } = await this.findChallengeByName(challengeName);
    const teamScore = await this.findTeamScoreBy({
      teamCodeNumber,
      judgeId,
      challengeId
    });
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

  public async createScoreRecord({ teamCodeNumber, challengeId, judgeId }) {
    await TeamScore.create({
      level: "initial",
      locked: false,
      teamCodeNumber,
      challengeId,
      judgeId
    });
  }

  public static sanitize(teamScore: TeamScore): any {
    const attrs = _.pick(teamScore, ...SANITIZED_FIELDS);
    return attrs;
  }

  public static async getAllJudgeTeamIdsByChallenge(judgeId: number) {
    const teamScores: TeamScore[] = await TeamScore.findAll({
      where: {
        judgeId
      },
      include: [Challenge]
    });

    return _.chain(teamScores)
      .groupBy("challenge.name")
      .mapValues(teamScores => _.map(teamScores, "teamCodeNumber"))
      .value();
  }

  private static async findTeamScoreBy({
    teamCodeNumber,
    judgeId,
    challengeId
  }): Promise<TeamScore> {
    return TeamScore.findOne({
      where: { teamCodeNumber, judgeId, challengeId }
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
