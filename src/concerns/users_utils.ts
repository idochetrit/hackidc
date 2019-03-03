import { sequelize } from "../../dist/db/sequelize";
import * as archiver from "archiver";
import { UserService } from "../users/user.service";

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
