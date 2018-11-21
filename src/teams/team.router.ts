import { Router } from "express";
import * as _ from "lodash";
import { handleUnauthorize } from "../routers.helper";
import { TeamService } from "./team.service";
import { Team } from "./team.model";
import { extname } from "path";

const router = new Router();

router.post("/", async (req, res) => handleUnauthorize("Not Available.", res));

router.get("/code", async (req, res) => {
  const { codeNumber, codeName } = await TeamService.generateTeamCode();

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
