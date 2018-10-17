import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import routers from "./src/routers";

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT;
app.listen(port, () => {
  console.log("App listening on port " + port);
});

// api routers
app.use("/api", routers);

app.get("/", function(req, res, next) {
  res.sendfile("./public/index.html");
});
