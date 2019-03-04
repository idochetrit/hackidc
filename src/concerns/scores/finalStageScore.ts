import { TeamScore } from "../../teams/scores/teamscore.model";

export class FinalStageScore {
  private _model: TeamScore;

  constructor(model: TeamScore) {
    this._model = model;
  }

  async score({ finalScore }: { finalScore: number }) {
    // Scoring accroding to finalScore property
    this._model.updateAttributes({ finalScore });
  }
}
