import * as _ from "lodash";
import { Router } from "express";
import { isPermittedUser, LEVELS, isSuperAdmin } from "../../concerns/auth.users";
import { TeamScoreService } from "./teamScore.service";
import { handleError } from "../../routers.helper";
import { JudgeService, FINAL_JUDGES } from "../../users/judges/judge.service";
import { Challenge } from "../../challenges/challenge.model";
import { TeamService } from "../team.service";

const router = new Router();

router.post("/", isPermittedUser(LEVELS.JUDGE), async (req, res) => {
  //score the team according to level
  try {
    const { challengeName, teamCodeNumber, judgeId, scoreData } = req.body;
    await TeamScoreService.scoreTeamWithChallenge({
      teamCodeNumber,
      challengeName,
      judgeId,
      scoreData
    });
    res.status(200).send("success");
  } catch (err) {
    console.log(err);
    throw err;
  }
});

router.post("/qualify", isSuperAdmin, async (req, res) => {
  try {
    const { teamCodeNumbers, count = 7 } = req.body;

    if (_.isEmpty(teamCodeNumbers)) throw new Error("new teams is given");
    if (teamCodeNumbers.length != count)
      throw new Error(`Its required to have exactely ${count} teams in the final round`);

    const teamScoresCount = await TeamScoreService.qualifyTeams(teamCodeNumbers);

    const { id: judgeId } = await JudgeService.getJudgeByName(FINAL_JUDGES[0]);
    const finalRoundTeams = await TeamScoreService.getFinalRoundTeams(judgeId);

    res.json({
      teamScoresCreatedForTeams: _.map(finalRoundTeams, "id"),
      teamScoresCount
    });
  } catch (error) {
    handleError(error, res);
  }
});

router.post("/assignJudge", isSuperAdmin, async (req, res) => {
  try {
    const { teamCodeNumber, challengeName, judgeId } = req.body;
    const { id: challengeId } = await Challenge.getByName(challengeName);
    await TeamScoreService.createScoreRecord({ teamCodeNumber, challengeId, judgeId });
    res.json({
      teamAssigned: teamCodeNumber,
      withJudgeId: judgeId,
      forChallenge: challengeName
    });
  } catch (error) {
    handleError(error, res);
  }
});

router.delete("/retireTeam", isSuperAdmin, async (req, res) => {
  try {
    const { teamCodeNumber } = req.body;
    const { id: teamId } = await TeamService.findOneByCode(teamCodeNumber);
    await TeamScoreService.deleteByTeamId(teamId);
    res.json({
      teamDeleted: teamCodeNumber,
      success: true
    });
  } catch (error) {
    handleError(error, res);
  }
});

export default router;
