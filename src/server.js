import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import history from "connect-history-api-fallback";
import routers from "./routers";

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

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
