import { Router } from "express";
import _ from "lodash";

const router = new Router();

router.post("/", (req, res) => {
  console.log(req.body);
  res.json({
    go: req.body.go,
    message: "asD"
  });
});

export default router;
