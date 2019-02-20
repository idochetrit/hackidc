import { Router } from "express";
import * as _ from "lodash";
import { handleError, handleNotFound } from "../routers.helper";
import { TeamService, PATCH_SANITIZED_FIELDS } from "./team.service";
import { Team } from "./team.model";
import { UserService } from "../users/user.service";

const router = new Router();

router.get("/public/:codeNumber", async (req, res) => {
  try {
    const teamCodeNumber: number = Number(_.get(req.params, "codeNumber"));
    const team: Team = await TeamService.findOneByCode(teamCodeNumber);

    if (!team) {
      handleNotFound(new Error(`No team found ${teamCodeNumber}`), res);
    }
    const sanitizedTeam: any = await TeamService.sanitize(team);
    res.json(sanitizedTeam);
  } catch (err) {
    handleError(err, res);
  }
});

router.patch("/self", async (req, res) => {
  try {
    const attributes: number = req.body;
    const userId: number = Number(_.get(req, "user.id")) || req.headers.userid;

    const newAttributes: any = _.pickBy(
      TeamService.extractTeamParams(attributes, PATCH_SANITIZED_FIELDS),
      _.identity
    );

    const team: Team = await UserService.getTeamByUserId(userId);
    await TeamService.updateTeam(team, newAttributes);
    if (!team) {
      handleNotFound(new Error(`No team found ${team.codeNumber}`), res);
    }
    const sanitizedTeam: any = await TeamService.sanitize(team, { withDeps: false });
    res.json(sanitizedTeam);
  } catch (err) {
    handleError(err, res);
  }
});

router.get("/code", async (req, res) => {
  const { codeNumber, codeName } = await TeamService.generateTeamCode();

  res.json({
    codeName,
    codeNumber
  });
});

router.get("/validate/:codeNumber", async (req, res) => {
  try {
    const codeNumber: number = Number(req.params.codeNumber);
    const validResponse = await TeamService.validateTeam(codeNumber);
    res.json(validResponse);
  } catch (err) {
    handleError(err, res);
  }
});

router.delete("/:id", async (req, res) => {
  await TeamService.deleteTeam(req.params.id);
  res.json({
    isDeleted: true
  });
});

router.get("/", async (req, res) => {
  const teams = await TeamService.getTeams();
  /// [ sanitize(team1), sanitize(team2).... ]
  const sanitizedTeams = await Promise.all(
    teams.map(team => TeamService.sanitize(team, { withDeps: false }))
  );
  res.json({
    teams: sanitizedTeams
  });
});

export default router;
