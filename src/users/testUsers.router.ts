import { Router } from "express";
import * as _ from "lodash";
import { UserTests } from "./user.tests";
import { JudgeService } from "./judges/judge.service";
import { isSuperAdmin } from "../concerns/auth.users";
import { UserService } from "./user.service";
import { handleError } from "../routers.helper";

const router = new Router();

router.put("/prehackAttendence", isSuperAdmin, async (req, res) => {
  const { email } = req.body;
  const user = await UserService.findByEmail(email);
  await UserService.updateUserWith(user, { attendedPreHack: true });
  res.json({
    updated: true
  });
});

router.get("/teamsUsers", isSuperAdmin, async (req, res) => {
  const { count } = req.query;
  UserTests.createTestUsers(count);
  console.log("Done");
  res.json({ usersCreated: count });
});

router.get("/sampleAdmins", isSuperAdmin, async (req, res) => {
  const { count } = req.query;
  const type = _.get(req.query, "type", "Mentor");
  const newUsers = await UserTests.createTestMentors(type, count);
  const sanitizedUsers = await Promise.all(newUsers.map(user => JudgeService.sanitize(user)));
  console.log("Done");
  res.json({
    usersCreated: count,
    createdUsers: sanitizedUsers
  });
});

router.post("/sampleTeamScores", isSuperAdmin, async (req, res) => {
  try {
    await UserTests.createTestTeamScores();

    console.log("Done");
    res.json({
      created: true
    });
  } catch (err) {
    console.log("error occured", err);
    handleError(err, res);
  }
});

export default router;
