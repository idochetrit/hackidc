import { Router } from "express";
import userRouter from "./users/user.router";
import authRouter from "./auth/auth.router";

const router = new Router();

router.get("/alive", (req, res) => {
  res.status(200).send("We're Alive!");
});

router.use("/users", userRouter);
router.use("/auth", authRouter);

export default router;
