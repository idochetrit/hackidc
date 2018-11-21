import { Router } from "express";
import * as _ from "lodash";
import { handleUnauthorize } from "../routers.helper";
import { TeamService } from "./team.service";

const router = new Router();

router.post("/", async (req, res) => handleUnauthorize("Not Available.", res));

router.get("/code", async (req, res) => {
  const { codeNumber, codeName } = await TeamService.generateTeamCode();

  res.json({
    codeName,
    codeNumber
  });
});

export default router;
