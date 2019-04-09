import * as _ from "lodash";
import * as Sentry from "@sentry/node";
import { Challenge } from "../../challenges/challenge.model";
import { CHALLENGES } from "../../challenges/challenge.model";
import { TeamScore } from "./teamscore.model";

import { User } from "../../users/user.model";
import { FINAL_JUDGES, JudgeService } from "../../users/judges/judge.service";
import { FinalStageScore } from "../../concerns/scores/finalStageScore";
import { InitialStageScore } from "../../concerns/scores/intialStageScore";
import { UserService } from "../../users/user.service";
import { Sequelize } from "sequelize-typescript";
import { TeamService } from "../team.service";

export const ROUNDS = {
  INITIAL: "initial",
  FINAL: "final"
};

const SANITIZED_FIELDS = ["judeId", "teamId", "challengeId", "challengeName"];

/**
 * @param {any} - either finalScore or
 *  {awesomenessScore, functionalityScore, creativityScore, usabilityScore}
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
    if (!(await JudgeService.isFinalRoundJudge(judgeId))) {
      const teamScore = await this.findTeamScoreBy({
        teamCodeNumber,
        judgeId,
        challengeId
      });
      const scoreService = new InitialStageScore(teamScore);
      await scoreService.score(scoreData);
    } else {
      const judge = await UserService.findById(judgeId);
      const scoreService = new FinalStageScore(judge);
      await scoreService.score(scoreData);
    }
  }

  public static async lockTeamScoreIds(teamScoresIds: number[]) {
    try {
      await TeamScore.update(
        { locked: true },
        {
          where: {
            id: { $in: teamScoresIds }
          }
        }
      );
    } catch (err) {
      Sentry.captureMessage(`Failed to update teams scores: ${teamScoresIds} with: ${err}`);
      throw err;
    }
  }

  public static async createScoreRecord({
    teamCodeNumber,
    challengeId,
    judgeId,
    level = "initial"
  }) {
    await TeamScore.create({
      level: level,
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
      where: Sequelize.and(
        Sequelize.or(
          {
            locked: null
          },
          { locked: false }
        ),
        {
          judgeId
        }
      ),
      include: [Challenge]
    });

    return _.chain(teamScores)
      .groupBy("challenge.name")
      .mapValues(teamScores => _.map(teamScores, "teamCodeNumber"))
      .value();
  }

  public static async getTeamScoreSummaryForJudgeId(judgeId: number) {
    const teamScores: TeamScore[] = await TeamScore.findAll({
      where: { judgeId },
      include: [Challenge],
      attributes: ["teamCodeNumber", "locked", "challenge.name"]
    });

    return _.chain(teamScores)
      .groupBy("challenge.name")
      .mapValues(teamScores =>
        teamScores.map(({ teamCodeNumber, locked }) => ({ teamCodeNumber, locked }))
      )
      .value();
  }

  public static async getFinalRoundTeams(judgeId: number): Promise<TeamScore[]> {
    const { id: challengeId } = await Challenge.getByName(CHALLENGES.GENERAL);
    const teamScores: TeamScore[] = await TeamScore.findAll({
      where: Sequelize.and(
        Sequelize.or(
          {
            locked: null
          },
          { locked: false }
        ),
        {
          judgeId,
          challengeId
        }
      )
    });

    return teamScores;
  }

  public static async qualifyTeams(teamCodeNumbers: number[]) {
    const { id: challengeId } = await Challenge.getByName(CHALLENGES.GENERAL);
    const finalJudges: User[] = await User.findAll({
      where: {
        email: { $in: FINAL_JUDGES }
      },
      attributes: ["id"]
    });
    const finalJudgesIds: number[] = finalJudges.map(({ id }) => id);

    let teamsCreatedCount = 0;
    // iterate through
    await Promise.all(
      finalJudgesIds.map(async judgeId => {
        const prms = teamCodeNumbers.map(async teamCodeNumber => {
          await this.createScoreRecord({ teamCodeNumber, judgeId, challengeId, level: "final" });
          teamsCreatedCount++;
        });
        await Promise.all(prms);
      })
    );
    return teamsCreatedCount;
  }

  public static async deleteByTeamId(teamId: number) {
    const { codeNumber: teamCodeNumber } = await TeamService.findOneById(teamId);
    await TeamScore.destroy({
      where: {
        teamCodeNumber
      }
    });
  }

  public static async findTeamScoreBy({
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
