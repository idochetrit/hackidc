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
    .omit("id", "linkedInId", "roleId", "teamId")
    .value();
}
router.get("/self", ensureAuthenticated, (req, res) =>
  Promise.resolve()
    .then(() => UserService.sanitize(req.user))
    .then(sanitizedUser => res.json(sanitizedUser))
);

router.post("/register", (req, res) =>
  // creates new user based on params
  Promise.resolve()
    .then(() => {
      const attrs = buildUserAttributes(req.body);
      const userId = 1; // req.user.id;
      return UserService.finishRegistration(userId, attrs);
    })
    .then(newUser => UserService.sanitize(newUser))
    .then(sanitizeUser => res.json(sanitizeUser))
    .catch(err => handleError(err, res))
);

export default router;
