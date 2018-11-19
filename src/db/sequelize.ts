import {Sequelize} from "sequelize-typescript";

const env = process.env.NODE_ENV || "development";
import { User } from "../users/user.model";
import * as configJSON from "./config.json";
const config = configJSON[env]

let db:Sequelize;

if (config.use_env_variable) {
  db = new Sequelize(process.env[config.use_env_variable]);
} else {
  db = new Sequelize({
    dialect: "postgres",
    database: config.database,
    username: config.username,
    password: config.password,
  });
}

const modelPath: string = __dirname + '/../**/*.model.ts';
db.addModels([modelPath], (filename, member) => {
  return filename.substring(0, filename.indexOf('.model')) === member.toLowerCase();
});

export const sequelize = db;