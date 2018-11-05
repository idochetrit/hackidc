import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import history from "connect-history-api-fallback";
import passport from "passport";
import session from "express-session";
import routers from "./routers";

const fileUpload = require("express-fileupload");

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(
  session({
    secret: "keyboardRhino",
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(fileUpload({}));

// api routers
app.use("/api", routers);

app.use(history());
app.use(express.static(`${__dirname}/../public`));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
