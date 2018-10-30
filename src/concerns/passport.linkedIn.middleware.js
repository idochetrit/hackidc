import passport from "passport";
import { Strategy } from "passport-linkedin-oauth2";
import UserService from "../users/user.service";

const LINKEDIN_CLIENT_ID = "86p0m3imliz50c";
const LINKEDIN_CLIENT_SECRET = "YsNlY0Lq3toHb4lw";

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  UserService.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new Strategy(
    {
      clientID: LINKEDIN_CLIENT_ID,
      clientSecret: LINKEDIN_CLIENT_SECRET,
      callbackURL: "http://test.hackidc.com:3000/api/auth/linkedin/callback",
      scope: ["r_basicprofile", "r_emailaddress"],
      passReqToCallback: true
    },
    (req, accessToken, _refreshToken, profile, done) => {
      req.session.accessToken = accessToken;
      Promise.resolve()
        .then(() => UserService.registerWithLinkedIn(profile))
        .then(user => {
          done(null, user);
        });
    }
  )
);

export default passport;
