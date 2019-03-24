import * as _ from "lodash";
import { Router } from "express";
import { isPermittedUser, LEVELS, isSuperAdmin } from "../../concerns/auth.users";
import { TeamScoreService } from "./teamScore.service";
import { handleError } from "../../routers.helper";
import { JudgeService, FINAL_JUDGES } from "../../users/judges/judge.service";

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

router.get("/lockAndAdvanceTeams", isPermittedUser(LEVELS.ADMIN), async (req, res) => {
  await TeamScoreService.lockTeamScores();
});

router.get("/unlockAndAdvanceTeams", isPermittedUser(LEVELS.ADMIN), async (req, res) => {
  await TeamScoreService.unlockTeamScores();
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

export default router;
