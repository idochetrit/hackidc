import { JudgeService } from "./judge.service";
import * as _ from "lodash";
import * as fs from "fs";

const PASSWRODS = ["Aa123123", "1q2w3e4r", "1234qwer"];

export async function createJudges(count = 100, override_judges) {
  const { profiles, judgeCreationPromises, finalname } = override_judges
    ? await createFinalJudges(override_judges)
    : await createInitalJudges(count);

  await Promise.all(judgeCreationPromises);
  savePasswordsToFile(profiles, finalname);
}

async function createInitalJudges(count) {
  let judgeCreationPromises = [];
  let profiles = [];
  for (let i = 100; i <= count + 100; i++) {
    const profile = {
      email: `user${i}`,
      name: `user${i}`,
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
    finalname: "initial_judges.txt"
  };
}
async function createFinalJudges(override_judges) {
  let profiles = [];
  const judgeCreationPromises = override_judges.map(judgeEmail => {
    const profile = {
      email: judgeEmail,
      name: judgeEmail,
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
    finalname: "final_judges.txt"
  };
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
