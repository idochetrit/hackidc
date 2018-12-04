import { Router } from "express";
import * as _ from "lodash";
import { handleError } from "../routers.helper";
import { TeamService } from "./team.service";
import { ensureAuthenticated } from "../concerns/auth.users";
import { Team } from "./team.model";

const router = new Router();

router.post("/public/:codeNumber", ensureAuthenticated, async (req, res) => {
  try {
    const teamCodeNumber: number = Number(req.data.codeNumber);
    const team: Team = await TeamService.findOneByCode(teamCodeNumber);
    const sanitizedTeam: any = TeamService.sanitize(team);
    res.json({
      team: sanitizedTeam
    });
  } catch (err) {
    handleError(err, res);
  }
});

router.get("/code", async (req, res) => {
  const {
    codeNumber,
    codeName
  }: { codeNumber: number; codeName: number } = await TeamService.generateTeamCode();

  res.json({
    codeName,
    codeNumber
  });
});

router.delete("/:id", async (req, res) => {
  await TeamService.deleteTeam(req.params.id);
  res.json({
    isDeleted: true
  });
});

export default router;
