import { Router } from "express";
import * as _ from "lodash";
import { isPermittedUser, LEVELS } from "../../concerns/auth.users";
import { UserService } from "../user.service";
import { JudgeService } from "./judge.service";
import { handleError } from "../../routers.helper";
import { TeamScoreService } from "../../teams/scores/teamScore.service";

const router = new Router();

router.get("/self", isPermittedUser(LEVELS.JUDGE), async (req, res) => {
  try {
    const userId: number = Number(_.get(req, "user.id")) || Number(req.query.judgeid);
    if (_.isUndefined(userId) || _.isNaN(userId)) throw new Error("userId is missing");
    const user = await UserService.findById(userId, { includeDeps: true });
    const sanitizedUser = await JudgeService.sanitize(user);

    res.json(sanitizedUser);
  } catch (err) {
    handleError(err, res);
  }
});

router.get("/self/teams", isPermittedUser(LEVELS.JUDGE), async (req, res) => {
  try {
    const userId: number = Number(_.get(req, "user.id")) || Number(req.headers.userid);
    const user = await UserService.findById(userId, { includeDeps: true });

    const sanitizedUser = await JudgeService.sanitize(user);
    const teamsByChallenge = await TeamScoreService.getAllJudgeTeamIdsByChallenge(userId);
    res.json({
      user: sanitizedUser,
      teamsByChallenge
    });
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const params: any = JudgeService.extractUserParams(req.body);
    const newJudge = await JudgeService.createLocalAuthUser(params);
    const sanitizedUser = await UserService.sanitize(newJudge);

    res.json({ user: sanitizedUser });
  } catch (err) {
    handleError(err, res);
  }
});

export default router;
