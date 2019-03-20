import { TeamScore } from "../../teams/scores/teamscore.model";
import * as _ from "lodash";
export class FinalStageScore {
  private _model: TeamScore;

  constructor(model: TeamScore) {
    this._model = model;
  }

  async score({ finalScore }: { finalScore: number }) {
    // Scoring accroding to finalScore property
    _.assign(this._model, { finalScore });
  }

  lock() {
    this._model.locked = true;
  }
}
