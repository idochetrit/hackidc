import { Router } from "express";
import userRouter from "./users/user.router";

const router = new Router();

router.use("/users", userRouter);

export default router;
