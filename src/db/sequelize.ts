import { Sequelize } from "sequelize-typescript";

const env = process.env.NODE_ENV || "development";
import * as configJSON from "./config.json";
const config = configJSON[env];

let db: Sequelize;

if (config.use_env_variable) {
  db = new Sequelize({
    url: process.env[config.use_env_variable],
    logging: false
  });
} else {
  db = new Sequelize({
    logging: false,
    dialect: "postgres",
    database: config.database,
    username: config.username,
    password: config.password,
    pool: {
      max: 20,
      idle: 3600
    }
  });
}

const modelPath: string = __dirname + "/../**/*.model.*";
db.addModels([modelPath], (filename, member) => {
  console.log("model ", member.toLowerCase(), " loaded.");
  return filename.substring(0, filename.indexOf(".model")) === member.toLowerCase();
});

export const sequelize = db;
