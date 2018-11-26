import * as passport from "passport";
import { Strategy } from "passport-linkedin-oauth2";
import { UserService } from "../users/user.service";

const { LINKEDIN_CLIENT_ID, LINKEDIN_CLIENT_SECRET } = process.env;

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
      callbackURL: `${process.env.HOST}/api/auth/linkedin/callback`,
      scope: ["r_basicprofile", "r_emailaddress"],
      passReqToCallback: true
    },
    (req, accessToken, _refreshToken, profile, done) => {
      req.session.accessToken = accessToken;
      return (async function linkUser() {
        const user = await UserService.createLinkedInUser(profile, accessToken);
        done(null, user);
      })();
    }
  )
);

export default passport;
