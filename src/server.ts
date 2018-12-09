import * as bodyParser from "body-parser";
import * as history from "connect-history-api-fallback";
import * as cors from "cors";
import * as express from "express";
import * as session from "express-session";
import * as morgan from "morgan";
import * as passport from "passport";
import { sequelize } from "./db/sequelize";
import routers from "./routers";
import * as Sentry from "@sentry/node";

import * as fileUpload from "express-fileupload";

Sentry.init({ dsn: process.env.SENTRY_URI });

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
app.use(Sentry.Handlers.requestHandler() as express.RequestHandler);
app.use(Sentry.Handlers.errorHandler() as express.ErrorRequestHandler);

// api routers
app.use("/api", routers);

app.use(history());
app.use("/static", express.static(`${__dirname}/static`));
app.use(express.static(`${__dirname}/../public`));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const port = process.env.PORT || 8080;

Promise.resolve()
  .then(() => sequelize.sync({}))
  .then(() => {
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  });
