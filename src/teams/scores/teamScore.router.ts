import { Router } from "express";
import { isSuperAdmin, ensureAuthenticated } from "../../concerns/auth.users";
import { TeamScoreService } from "./teamScore.service";

const router = new Router();

router.get("/reports", isSuperAdmin, (req, res) => {
  res.json({
    message: "Under construction..."
  });
});

router.post("/", ensureAuthenticated, async (req, res) => {
  //score the team according to level
  // TeamScoreService.scoreTeamWithChallenge();
});
export default router;
