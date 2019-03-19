import * as archiver from "archiver";
import { UserService } from "../users/user.service";
import { sequelize } from "../db/sequelize";
import { User } from "../users/user.model";
import * as bcrypt from "bcryptjs";

export async function zipAllCvs() {
  const results = await sequelize.query(`
    select id, name, "cvFile" from "Users" where "teamId" 
      in (select u."teamId" from "Users" u group by "teamId" having
      avg(u.score) > 0.55
      and avg(u.score) < 0.70)`);
  // cvFile:Uint8Array

  const usersCvs = results[0].map(({ id, name, cvFile }) => ({ id, name, cvFile }));
  // zipping files

  const zip = archiver("zip", {
    zlib: { level: 7 } // Sets the compression level.
  });

  usersCvs.forEach(({ id, name, cvFile }) => {
    const filename = UserService.cvFilename({ id, name });
    zip.append(cvFile, { name: filename });
  });

  return zip;
}

export async function zipTeamCvs(teamId: number) {
  const users: User[] = await User.findAll({
    where: { teamId: teamId },
    attributes: ["id", "name", "cvFile"]
  });
  // cvFile:Uint8Array

  const zip = archiver("zip", {
    zlib: { level: 8 } // Sets the compression level.
  });

  users.forEach(({ id, name, cvFile }) => {
    const filename = UserService.cvFilename({ id, name });
    zip.append(cvFile, { name: filename });
  });

  return zip;
}

export async function encryptPassword(newPassword: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(newPassword, salt);
}

export async function comparePassword(rawPass: string, hashedPass: string): Promise<boolean> {
  try {
    return bcrypt.compare(rawPass, hashedPass);
  } catch (err) {
    console.log(`failed to comapre passwords with: ${err}`);
    throw err;
  }
}
