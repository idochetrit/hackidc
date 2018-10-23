const { Router } = require("express");

const userRouter = new Router();

userRouter.get("/", (req, res) => {
  console.log("Here");

  res.json({
    users: [],
    message: "here"
  });
});

export default userRouter;
