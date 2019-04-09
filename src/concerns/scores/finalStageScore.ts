import * as _ from "lodash";
import * as Sentry from "@sentry/node";
import { TeamScore } from "../../teams/scores/teamscore.model";
import { User } from "../../users/user.model";
import { TeamScoreService, ROUNDS } from "../../teams/scores/teamScore.service";
import { Challenge, CHALLENGES } from "../../challenges/challenge.model";

export class FinalStageScore {
  private _model: User;

  constructor(model: User) {
    this._model = model; // Judge
  }

  public async score({
    firstPlace,
    secondPlace,
    thirdPlace
  }: {
    firstPlace: number;
    secondPlace: number;
    thirdPlace: number;
  }) {
    // Scoring accroding to first,second,thirud team code numbers
    if (await this.isLocked()) {
      throw new Error(`scoring is locked for team/s`);
    }
    const { id: challengeId } = await Challenge.getByName(CHALLENGES.GENERAL); // general challenge

    // update 3 teams
    const [firstPlaceTeam, secondPlaceTeam, thirdPlaceTeam] = await Promise.all([
      TeamScoreService.findTeamScoreBy({
        teamCodeNumber: firstPlace,
        judgeId: this._model.id,
        challengeId
      }),
      TeamScoreService.findTeamScoreBy({
        teamCodeNumber: secondPlace,
        judgeId: this._model.id,
        challengeId
      }),
      TeamScoreService.findTeamScoreBy({
        teamCodeNumber: thirdPlace,
        judgeId: this._model.id,
        challengeId
      })
    ]);

    await this.updateScore(firstPlaceTeam, 1);
    await this.updateScore(secondPlaceTeam, 2);
    await this.updateScore(thirdPlaceTeam, 3);

    // lock the rest
    await this.lock();
  }

  private async updateScore(teamScore: TeamScore, place: number) {
    try {
      teamScore.update({ finalScore: place });
    } catch (err) {
      const { teamCodeNumber } = teamScore;
      Sentry.captureMessage(
        `failed to update score for ${teamCodeNumber}, judge: ${this._model.name}, with: ${err}`
      );
      throw err;
    }
  }

  private async isLocked() {
    const pendingTeams: TeamScore[] = await TeamScoreService.getFinalRoundTeams(this._model.id);
    return _.every(pendingTeams, "locked");
  }

  private async lock() {
    const pendingTeams: TeamScore[] = await TeamScoreService.getFinalRoundTeams(this._model.id);
    const teamScoresIds = _.map(pendingTeams, "id");
    await TeamScoreService.lockTeamScoreIds(teamScoresIds);
  }
}
