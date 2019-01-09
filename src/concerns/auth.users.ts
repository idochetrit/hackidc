import * as _ from "lodash";
import { Role } from "../roles/role.model";
import { User } from "../users/user.model";
import { UserService } from "../users/user.service";
import userRole from "../users/user.role";

export function ensureAuthenticated(req, res, next) {
  if (process.env.NODE_ENV !== "production" || req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}
export const LEVELS = {
  ADMIN: ["Judge", "Mentor"],
  JUDGE: "JUDGE",
  MENTOR: "Mentor"
};
export function isPermittedUser(level) {
  return async function(req, res, next) {
    const userId: number = Number(_.get(req, "user.id")) || req.query.id;
    const user = await UserService.findById(userId);
    return _.includes(LEVELS[level], user.role);
  };
}

export function isSuperAdmin(req, res, next) {
  if (
    process.env.NODE_ENV !== "production" ||
    req.headers["Authorization"] == process.env.defaultAdminToken
  ) {
    return next();
  }
  res.redirect("/login");
}

export function getRedirectPathStatus(registerStatus: string): string {
  // pending: signup, approved: dashboard/profile, review: reject status-message,

  const map = {
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
