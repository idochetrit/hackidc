import { Router } from "express";
import _ from "lodash";
import { handleError } from "../routers.helper";
import passportLinkedin from "../concerns/passport.linkedIn.middleware";
import userService from "../users/user.service";

const router = new Router();

// GET /auth/linkedin
router.get(
  "/linkedin",
  passportLinkedin.authenticate("linkedin", { state: "loginState" })
);

// GET /auth/linkedin/callback
router.get(
  "/linkedin/callback",
  passportLinkedin.authenticate("linkedin", {
    failureRedirect: "/login"
  }),
  (req, res) => res.redirect("/signup")
);

export default router;
