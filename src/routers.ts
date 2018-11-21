import { Router } from "express";
import authRouter from "./auth/auth.router";
import teamRouter from "./teams/team.router";
import userRouter from "./users/user.router";

const router = new Router();

router.get("/alive", (req, res) => {
  res.status(200).send("We're Alive!");
});

router.use("/users", userRouter);
router.use("/auth", authRouter);
router.use("/teams", teamRouter);

export default router;
