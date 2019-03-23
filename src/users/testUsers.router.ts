import { Router } from "express";
import * as _ from "lodash";
import { UserTests } from "./user.tests";
import { JudgeService } from "./judges/judge.service";
import { isSuperAdmin } from "../concerns/auth.users";
import { UserService } from "./user.service";

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

router.get("/sampleTeamScores", isSuperAdmin, async (req, res) => {
  const { count } = req.query;
  // await UserTests.createTestTeamScores(type, count);

  console.log("Done");
  res.json({
    usersCreated: count
  });
});

export default router;
