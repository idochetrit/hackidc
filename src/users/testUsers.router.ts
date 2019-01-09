import { Router } from "express";
import * as _ from "lodash";
import { UserTests } from "./user.tests";
import { JudgeService } from "./judges/judge.service";
import { isSuperAdmin } from "../concerns/auth.users";

const router = new Router();

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

export default router;
