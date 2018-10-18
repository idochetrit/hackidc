import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import routers from "./routers";

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/assets", express.static(`${__dirname}/../assets`));
app.use(express.static(`${__dirname}/../public`));

app.set("view engine", "ejs");

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("App listening on port " + port);
});

// api routers
app.use("/api", routers);

app.get("/", function(req, res, next) {
  res.sendFile(`../public/index.html`);
});
