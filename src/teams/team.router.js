import { Router } from "express";
import _ from "lodash";
import teamService from "./team.service";
import { handleUnauthorize } from "../routers.helper";

const router = new Router();

router.post("/", async (req, res) => handleUnauthorize("Not Available.", res));

router.get("/code", async (req, res) => {
  const { codeNumber, codeName } = await teamService.generateTeamCode();

  res.json({
    codeName,
    codeNumber
  });
});

export default router;
