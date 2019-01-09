import { Router } from "express";
import { isAdmin } from "../../concerns/auth.users";

const router = new Router();

router.get("/reports", isAdmin, (req, res) => {
  res.json({
    message: "Under construction..."
  });
});
export default router;
