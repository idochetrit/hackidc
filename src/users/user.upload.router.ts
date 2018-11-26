import { Router } from "express";
import * as _ from "lodash";
import * as stream from "stream";
import { ensureAuthenticated } from "../concerns/auth.users";
import { handleError, handleNotFound } from "../routers.helper";
import { UserService } from "./user.service";

const router = new Router();

router.post("/cv", ensureAuthenticated, async (req, res) => {
  const userId = req.user.id;
  let user;
  try {
    user = await UserService.findById(userId);
  } catch (err) {
    handleNotFound(err, res);
  }

  try {
    if (Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
    }

    const { file: fileParams } = req.files;
    await UserService.updateCV({ user, fileParams });
  } catch (err) {
    handleError(err, res);
  }

  res.json({
    success: true,
    message: "File uploaded"
  });
});

router.get("/cv", ensureAuthenticated, async (req, res) => {
  const userId = req.user.id;
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

  const fileName = `${_.snakeCase(user.name)}_${user.id}_cvFile.pdf`;
  res.set("Content-disposition", `attachment; filename=${fileName}`);
  res.set("Content-Type", file.type);

  readStream.pipe(res);
});

export default router;