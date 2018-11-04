import { Router } from "express";
import _ from "lodash";
import userService, { SANITIZED_FIELDS } from "./user.service";
import { ensureAuthenticated } from "../concerns/auth.users";
import { handleError } from "../routers.helper";

const router = new Router();

function buildUserAttributes(body) {
  return _.chain(body)
    .get("user")
    .pick(SANITIZED_FIELDS)
    .mapValues(i => (typeof i == "string" ? _.toLower(i) : i))
    .omit("id", "linkedInId", "role", "team")
    .value();
}

router.get("/self", ensureAuthenticated, async (req, res) => {
  try {
    const sanitizedUser = await userService.sanitize(req.user);
    res.json(sanitizedUser);
  } catch (err) {
    handleError(err, res);
  }
});

router.post("/register", async (req, res) => {
  const userId = 1;
  // const userId = req.user.id;
  const user = await userService.findById(userId);

  const attrs = buildUserAttributes(req.body);
  try {
    const updatedUser = await userService.finishRegistration(user, attrs);
    const sanitizeUser = await userService.sanitize(updatedUser);

    res.json(sanitizeUser);
  } catch (err) {
    handleError(err, res);
  }
});

export default router;
