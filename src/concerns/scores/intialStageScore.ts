import { TeamScore } from "../../teams/scores/teamscore.model";
import * as _ from "lodash";

export class InitialStageScore {
  private _model: TeamScore;

  constructor(model: TeamScore) {
    this._model = model;
  }

  public async score({
    awesomeness,
    functionality,
    creativity,
    usability
  }: {
    awesomeness: number;
    functionality: number;
    creativity: number;
    usability: number;
  }) {
    // Scoring accroding to finalScore property
    if (this.isLocked()) {
      throw new Error(`scoring is locked for team/s`);
    }
    _.assign(this._model, {
      awesomenessScore: awesomeness,
      functionalityScore: functionality,
      creativityScore: creativity,
      usabilityScore: usability
    });
    this.lock();

    await this._model.save();
  }

  private isLocked() {
    return this._model.locked;
  }

  private lock() {
    this._model.locked = true;
  }
}
