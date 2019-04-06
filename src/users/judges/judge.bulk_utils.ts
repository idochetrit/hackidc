import { JudgeService } from "./judge.service";
import * as _ from "lodash";
import * as fs from "fs";
import userRole from "../user.role";
import { LEVELS } from "../../concerns/auth.users";

const PASSWRODS = ["Aa123123", "1q2w3e4r", "1234qwer"];

export async function createJudges(count = 100, offset = 0, override_judges) {
  const { profiles, judgeCreationPromises, finalname } = override_judges
    ? await createFinalJudges(override_judges)
    : await createInitalJudges(count, offset);

  await Promise.all(judgeCreationPromises);
  savePasswordsToFile(profiles, finalname);
}

async function createInitalJudges(count, offset) {
  let judgeCreationPromises = [];
  let profiles = [];
  for (let i = 100 + offset; i <= count + 100 + offset; i++) {
    const profile = {
      email: `user${i}`,
      name: `User${i}`,
      password: _.sample(PASSWRODS)
    };
    profiles.push(profile);
    judgeCreationPromises.push(
      JudgeService.createLocalAuthUser(profile).catch(err => {
        console.log("error creating user", err);
      })
    );
  }
  console.log(profiles);

  return {
    profiles,
    judgeCreationPromises,
    finalname: `initial_judges-${offset}.txt`
  };
}

async function createFinalJudges(override_judges) {
  let profiles = [];
  const judgeCreationPromises = override_judges.map(judgeEmail => {
    const profile = {
      email: judgeEmail,
      name: _.startCase(judgeEmail),
      password: _.sample(PASSWRODS)
    };
    profiles.push(profile);
    return JudgeService.createLocalAuthUser(profile).catch(err => {
      console.log("error creating user", err);
    });
  });
  return {
    profiles,
    judgeCreationPromises,
    finalname: `final_judges.txt`
  };
}

export async function createMentors(count = 150) {
  let judgeCreationPromises = [];
  let profiles = [];
  const { id: roleId } = await userRole.getByName(LEVELS.MENTOR);

  for (let i = 1; i <= count; i++) {
    const profile = {
      email: `mentor${i}`,
      name: `Mentor${i}`,
      password: _.sample(PASSWRODS),
      roleId
    };
    profiles.push(profile);
    judgeCreationPromises.push(
      JudgeService.createLocalAuthUser(profile).catch(err => {
        // creates mentors
        console.log("error creating user", err);
      })
    );
  }
  console.log(profiles);

  await Promise.all(judgeCreationPromises);
  savePasswordsToFile(profiles, "mentors.txt");
}

function savePasswordsToFile(
  judgesProfiles: { email: string; password: string }[],
  finalname: string
) {
  const path = `./tmp/${finalname}`;
  const str = judgesProfiles.map(({ email, password }) => `${email}: ${password}`).join("\n");

  fs.mkdir("./tmp", { recursive: true }, err => {});
  fs.writeFile(path, str, { flag: "w" }, function(err) {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log("Successfully Written to File.");
  });
}
