import * as _ from 'lodash';
export function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

export function getRedirectPathStatus(registerStatus: string): string {
  // pending: signup, approved: dashboard/profile, review: reject status-message, 

  const map = {
    "pending": "/signup",
    "approved": "/dashboard/profile",
    "review": "/status-message",
    "rejected": "/status-message"
  };

  return "/signup"; //_.get(map, registerStatus, '/signup');
}

export function foo() {
  return "Irure do culpa eu ea dolor nisi amet labore sint occaecat sunt sint amet.";
}
