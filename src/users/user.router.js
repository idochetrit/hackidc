import { Router } from "express";
import _ from "lodash";
import userService from "./user.service";
import { ensureAuthenticated } from "../concerns/auth.users";
import { handleError, handleUnauthorize } from "../routers.helper";
import teamService from "../teams/team.service";
import userUploadsRouter from "./user.upload.router";

const router = new Router();

router.use("/self/uploads", userUploadsRouter);

router.get("/self", async (req, res) => {
  try {
    const userId = _.get(req, "user.id") || req.query.id;
    const user = await userService.findById(userId);
    const sanitizedUser = await userService.sanitize(user);
    res.json(sanitizedUser);
  } catch (err) {
    handleError(err, res);
  }
});

router.post("/register", async (req, res) => {
  // temp block in production
  if (process.env.NODE_ENV === "production") {
    return handleUnauthorize(new Error("Currently unavailable"), res);
  }
  try {
    const userId = req.user.id;
    const user = await userService.findById(userId);
    const userParams = userService.extractUserParams(req.body);
    const teamParams = teamService.extractTeamParams(req.body);

    const updatedUser = await userService.finishRegistration({
      user,
      userParams,
      teamParams
    });
    const sanitizedUser = await userService.sanitize(updatedUser);

    res.json({
      user: sanitizedUser
    });
  } catch (err) {
    handleError(err, res);
  }
});

export default router;
