import * as animals from "animals";
import * as _ from "lodash";
import * as pluralize from "pluralize";
import { Sequelize } from "sequelize-typescript";
import { Team } from "../team.model";
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
    scoreData: { awesomenessScore: number; functionalityScore: number }; // TODO: fill accureate fields
  }) {
    // update score if not locked
  }

  public static async lockTeamScores() {
    // bulk update to lock teams and increase the level.
    //move the locked team up level
  }

  public static async rankFinalistTeamScore({
    team,
    judgeId,
    challengId,
    scoreRank
  }: {
    team: Team;
    judgeId: number; //userId
    challengId: number;
    scoreRank: number; // TODO: is it final
  }) {
    //validate it is a final level team.
    //otherwise return false
    // update the rank for the requested team for the requesting user/judgeId
  }

  public static async sortRankedTeams(): Promise<Team[]> {
    return [];
  }

  public static async calculateFinalWinningTeams() {}

  public static async qualifyingTeams() {
    //verify that there are level 'initial'
    // average the scores and sort them
  }
}
