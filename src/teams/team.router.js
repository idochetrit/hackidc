import { Router } from "express";
import _ from "lodash";
import generateName from "sillyname";
import teamService from "./team.service";
import { handleUnauthorize } from "../routers.helper";

const router = new Router();

router.post(
  "/",
  async (req, res) => handleUnauthorize("Not Available.", res)
  // const attributes = teamService.buildTeamAttributes(req.body);
  // const newTeam = await teamService.create(attributes);
  // const sanitizedTeam = await teamService.sanitize(newTeam);
  // console.log(req.body);
  // res.json({ team: sanitizedTeam });
);

router.get("/code", async (req, res) => {
  const code = await teamService.generateTeamCode();
  const codeName = generateName();

  res.json({
    code,
    codeName
  });
});

export default router;
