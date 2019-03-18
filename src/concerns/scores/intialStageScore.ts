import { TeamScore } from "../../teams/scores/teamscore.model";

export class InitialStageScore {
  private _model: TeamScore;

  constructor(model: TeamScore) {
    this._model = model;
  }

  async score({
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
    await this._model.update({
      awesomenessScore: awesomeness,
      functionalityScore: functionality,
      creativityScore: creativity,
      usabilityScore: usability
    });
  }
}
