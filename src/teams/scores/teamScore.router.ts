import { Router } from "express";
import { isSuperAdmin } from "../../concerns/auth.users";

const router = new Router();

router.get("/reports", isSuperAdmin, (req, res) => {
  res.json({
    message: "Under construction..."
  });
});
export default router;
