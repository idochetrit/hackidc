import { Router } from "express";
import * as _ from "lodash";
import * as stream from "stream";
import { ensureAuthenticated } from "../concerns/auth.users";
import { handleError, handleNotFound } from "../routers.helper";
import { UserService } from "./user.service";

const router = new Router();

router.post("/cv", ensureAuthenticated, async (req, res) => {
  const userId: number = Number(_.get(req, "user.id")) || req.headers.userid;
  const user = await UserService.findById(userId);
  if (!user) {
    handleNotFound(new Error("user not found!"), res);
  }

  try {
    if (Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
    }

    const { file: fileParams } = req.files;
    await UserService.updateCV({ user, fileParams });
    res.json({
      success: true,
      message: "File uploaded"
    });
  } catch (err) {
    handleError(err, res);
  }
});

router.get("/cv", async (req, res) => {
  const userId: number = Number(_.get(req, "user.id")) || req.headers.userid;
  let user;
  try {
    user = await UserService.findById(userId);
  } catch (err) {
    handleNotFound(err, res);
  }

  const { cvFile: file } = user;

  const fileContents = Buffer.from(file, "base64");
  const readStream = new stream.PassThrough();
  readStream.end(fileContents);
  const filename: string = UserService.cvFilename(user);
  res.set("Content-disposition", `attachment; filename=${filename}`);
  res.set("Content-Type", file.type);

  readStream.pipe(res);
});

export default router;
