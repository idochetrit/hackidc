import { Router } from "express";
import _ from "lodash";
import UserService from "./user.service";
import { handleError } from "../routers.helper";

const userRouter = new Router();

function buildUserAttributes(body) {
  return {
    name: body.user.name
  };
}
userRouter.post("/register", (req, res) => {
  // creates new user based on params
  Promise.resolve()
    .then(() => {
      const attrs = buildUserAttributes(req.body);
      return UserService.createUser(attrs);
    })
    .then(newUser => UserService.sanitize(newUser))
    .then(sanitizeUser => res.json(sanitizeUser))
    .catch(err => handleError(err, res));
});

export default userRouter;
