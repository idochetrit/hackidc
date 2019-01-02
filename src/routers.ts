import { Router } from "express";
import authRouter from "./auth/auth.router";
import teamRouter from "./teams/team.router";
import userRouter from "./users/user.router";
import judgesRouter from "./users/judges/judge.router";

const router = new Router();

router.get("/alive", (req, res) => {
  res.status(200).send("We're Alive!");
});

router.use("/users", userRouter);
router.use("/judges", judgesRouter);
router.use("/auth", authRouter);
router.use("/teams", teamRouter);

export default router;
