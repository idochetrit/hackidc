import { Router } from "express";
import _ from "lodash";
import { handleError } from "../routers.helper";
import passportLinkedin from "../concerns/passport.linkedIn.middleware";

const router = new Router();

// POST /auth/linkedin
router.get("/linkedin", passportLinkedin.authenticate("linkedin"));

// GET /auth/linkedin/callback
router.get(
  "/linkedin/callback",
  passportLinkedin.authenticate("linkedin", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect(`/users/${req.user.username}`);
  }
);

export default router;
