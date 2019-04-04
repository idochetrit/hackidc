import * as _ from "lodash";
import { UserService } from "../users/user.service";

export function ensureAuthenticated(req, res, next) {
  if (process.env.NODE_ENV !== "production" || req.isAuthenticated()) {
    if (req.user) res.set("Authorization", req.user.authToken);
    return next();
  }
  res.redirect("/login");
}
export const LEVELS = {
  ADMIN: ["Judge", "Mentor"],
  JUDGE: "Judge",
  MENTOR: "Mentor"
};
export function isPermittedUser(level) {
  return async function(req, res, next) {
    try {
      if (process.env.NODE_ENV !== "production" || req.isAuthenticated()) {
        const userId: number = Number(
          _.get(req, "user.id") ||
            req.query.id ||
            req.headers.userid ||
            _.get(req.session.passport, "user")
        );
        const user = await UserService.findById(userId, { includeDeps: true });
        if (level === user.role.name) {
          return next();
        }
        throw new Error(`user level: ${user.role.name} not permitted to: ${level}`);
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  };
}

export function isSuperAdmin(req, res, next) {
  if (
    process.env.NODE_ENV !== "production" ||
    req.headers["Authorization"] === process.env.ADMIN_TOKEN
  ) {
    return next();
  }
  res.redirect("/login");
}

export function getRedirectPathStatus(registerStatus: string): string {
  // pending: signup, approved: dashboard/profile, review: reject status-message,

  const map = {
    judge: "/judging-landing",
    pending: "/signup",
    approved: "/dashboard/profile",
    review: "/status-message",
    rejected: "/status-message"
  };

  return _.get(map, registerStatus, "/signup");
}

export function foo() {
  return "Irure do culpa eu ea dolor nisi amet labore sint occaecat sunt sint amet.";
}
