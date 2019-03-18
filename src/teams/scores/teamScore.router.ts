import * as _ from "lodash";
import { Router } from "express";
import { isPermittedUser, LEVELS } from "../../concerns/auth.users";
import { TeamScoreService } from "./teamScore.service";
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

router.get("/lockAndAdvanceTeams", isPermittedUser(LEVELS.ADMIN), async (req, res) => {
  await TeamScoreService.lockTeamScores();
});

router.get("/unlockAndAdvanceTeams", isPermittedUser(LEVELS.ADMIN), async (req, res) => {
  await TeamScoreService.unlockTeamScores();
});

export default router;
