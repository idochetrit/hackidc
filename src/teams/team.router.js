import { Router } from "express";
import _ from "lodash";
import teamService from "./team.service";

const router = new Router();

router.post("/", (req, res) => {
  console.log(req.body);
  res.json({
    go: req.body.go,
    message: "asD"
  });
});

router.get("/code", async (req, res) => {
  const code = await teamService.generateTeamCode();

  res.json({
    code
  });
});

export default router;
