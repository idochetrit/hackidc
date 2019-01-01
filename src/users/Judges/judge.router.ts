import { Router } from "express";
import * as _ from "lodash";
import { ensureAuthenticated } from "../concerns/auth.users";
import { TeamService } from "../teams/team.service";
import { UserService } from "./user.service";
import userUploadsRouter from "./user.upload.router";
import { User } from "./user.model";
import { JudgeService } from "./judge.service";
import { handleError } from "../../routers.helper";

const router = new Router();

router.use("/self/uploads", userUploadsRouter);

router.get("/self", ensureAuthenticated, async (req, res) => {
  try {
    const userId: number = Number(_.get(req, "user.id")) || req.query.id;
    if (_.isUndefined(userId) || _.isNaN(userId)) throw new Error("userId is missing");
    const user = await UserService.findById(userId, { includeDeps: true });
    const sanitizedUser = await JudgeService.sanitize(user);

    res.json(sanitizedUser);
  } catch (err) {
    handleError(err, res);
  }
});

router.post("/", async (req, res) => {
  try {
    const params: any = JudgeService.extractUserParams(req.body);

    const newJudge: User = await JudgeService.createLocalAuthUser(params);
    const sanitizedUser = await UserService.sanitize(newJudge);

    res.json({ user: sanitizedUser });
  } catch (err) {
    handleError(err, res);
  }
});

export default router;
