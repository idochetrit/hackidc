import { InitialStageScore } from "./intialStageScore";
import { FinalStageScore } from "./finalStageScore";
import { TeamScore, LEVEL_ENUMS } from "../../teams/scores/teamscore.model";

export class ScoreService {
  private _proto: any;
  private _model: TeamScore;

  constructor(model: TeamScore) {
    this._model = model;
    const { level } = model;
    this._proto =
      level === LEVEL_ENUMS["final"] ? new FinalStageScore(model) : new InitialStageScore(model);
  }

  async score(data: any) {
    if (this._model.locked) {
      const teamCodeNumber = await this._model.team.codeNumber;
      throw new Error(`scoring is locked for team #${teamCodeNumber}`);
    }
    await this._proto.score(data);
  }

  // calculations
}
