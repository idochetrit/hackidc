import { Router } from "express";
import _ from "lodash";
import UserService, { SANITIZED_FIELDS } from "./user.service";
import { ensureAuthenticated } from "../concerns/auth.users";
import { handleError } from "../routers.helper";

const router = new Router();

function buildUserAttributes(body) {
  return _.chain(body)
    .get("user")
    .pick(SANITIZED_FIELDS)
    .mapValues(i => (typeof i == "string" ? _.toLower(i) : i))
    .omit("id", "linkedInId", "roleId", "teamId")
    .value();
}
router.get("/self", ensureAuthenticated, (req, res) =>
  Promise.resolve()
    .then(() => UserService.sanitize(req.user))
    .then(sanitizedUser => res.json(sanitizedUser))
    .catch(err => handleError(err, res))
);

router.post("/register", (req, res) =>
  Promise.resolve()
    .then(() => {
      const userId = 1;
      // const userId = req.user.id;
      return UserService.findById(userId);
    })
    .then(user => {
      const attrs = buildUserAttributes(req.body);
      UserService.finishRegistration(user, attrs);
    })
    .then(newUser => UserService.sanitize(newUser))
    .then(sanitizeUser => res.json(sanitizeUser))
    .catch(err => handleError(err, res))
);

export default router;
