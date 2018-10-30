export function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/users/login");
}

export function foo() {
  return "Irure do culpa eu ea dolor nisi amet labore sint occaecat sunt sint amet.";
}
