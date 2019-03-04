import { TeamScore } from "../../teams/scores/teamscore.model";

export class InitialStageScore {
  private _model: TeamScore;

  constructor(model: TeamScore) {
    this._model = model;
  }

  async score({
    awesomnessScore,
    funcionalityScore,
    creativityScore,
    usabilityScore
  }: {
    awesomnessScore: number;
    funcionalityScore: number;
    creativityScore: number;
    usabilityScore: number;
  }) {
    // Scoring accroding to finalScore property
    this._model.updateAttributes({
      awesomnessScore,
      funcionalityScore,
      creativityScore,
      usabilityScore
    });
  }
}
