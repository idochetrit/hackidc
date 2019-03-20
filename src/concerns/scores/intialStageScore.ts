import { TeamScore } from "../../teams/scores/teamscore.model";
import * as _ from "lodash";

export class InitialStageScore {
  private _model: TeamScore;

  constructor(model: TeamScore) {
    this._model = model;
  }

  score({
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
    _.assign(this._model, {
      awesomenessScore: awesomeness,
      functionalityScore: functionality,
      creativityScore: creativity,
      usabilityScore: usability
    });
  }

  lock() {
    this._model.locked = true;
  }
}
