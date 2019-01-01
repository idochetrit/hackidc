import { Router } from "express";
import * as _ from "lodash";
import { getRedirectPathStatus } from "../concerns/auth.users";
import passportLinkedin from "../concerns/passport.linkedIn.middleware";
import passportLocal from "../concerns/passport.local.middleware";

const router = new Router();

// POST /auth/logout
router.get("/logout", (req, res) => {
  req.logout();
  res.status(204).send("");
});

// for judges
// GET /auth/login
router.get("/login", passportLocal.authenticate("local"));

// GET /auth/linkedin
router.get("/linkedin", passportLinkedin.authenticate("linkedin", { state: "loginState" }));

// GET /auth/linkedin/callback
router.get(
  "/linkedin/callback",
  passportLinkedin.authenticate("linkedin", {
    failureRedirect: "/login"
  }),
  (req, res) => {
    const redirectPath: string = getRedirectPathStatus(req.user.registerStatus.toString());

    res.redirect(redirectPath);
  }
);

export default router;
