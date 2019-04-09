import * as _ from "lodash";
import { UserService } from "../users/user.service";

export const LEVELS = {
  ADMIN: ["Judge", "Mentor"],
  JUDGE: "Judge",
  MENTOR: "Mentor"
};

export function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    if (req.user) {
      res.set("Authorization", req.user.authToken);
    }
    return next();
  }
  res.redirect("/login");
}

export function isPermittedUser(level) {
  return async function(req, res, next) {
    try {
      if (req.isAuthenticated()) {
        const userId: number = Number(
          _.get(req, "user.id") ||
            req.query.id ||
            req.headers.userid ||
            _.get(req.session.passport, "user")
        );

        if (await permittedForRound(userId, level)) return next();
        throw new Error(`userId: ${userId} not permitted to: ${level}`);
      } else {
        throw new Error(`Unauthorized User`);
      }
    } catch (err) {
      console.error(err);
      res.redirect("/login");
    }
  };
}

export async function permittedForRound(userId: number, level: string = null): Promise<boolean> {
  const user = await UserService.findById(userId, { includeDeps: true });
  const {
    role: { name: roleName }
  } = user;

  if (level && level !== roleName) return false;
  const currentRound: number = Number(process.env.ROUND_NUMBER) || 0;
  const mappedRoundRestrictions = {
    [LEVELS.JUDGE]: () => currentRound >= 1,
    [LEVELS.MENTOR]: () => currentRound >= 0
  };
  return mappedRoundRestrictions[roleName]();
}

export function isSuperAdmin(req, res, next) {
  if (req.headers["authorization"] === process.env.ADMIN_TOKEN) {
    return next();
  }
  res.redirect("/login");
}

export function getRedirectPathStatus(registerStatus: string): string {
  // pending: signup, approved: dashboard/profile, review: reject status-message,

  const map = {
    judge: "/judging-landing",
    mentor: "/",
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
