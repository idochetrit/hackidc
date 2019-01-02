import * as passport from "passport";
import { UserService } from "../users/user.service";
import { User } from "../users/user.model";
import { Strategy } from "passport-local";
const LocalStrategy = Strategy;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  UserService.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    async (username, password, done) => {
      try {
        const user = await User.findOne({ where: { email: username } });
        if (!user) {
          return done(null, false);
        }
        if (!UserService.verifyPassword(user, password)) {
          return done(null, false);
        }
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);
export default passport;
