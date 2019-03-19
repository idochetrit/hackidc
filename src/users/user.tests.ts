import * as faker from "faker";
import * as _ from "lodash";
import { User } from "./user.model";
import { academicInstitutesMap } from "./user.constants";
import { TeamService } from "../teams/team.service";
import { UserService } from "./user.service";
import { sequelize } from "../db/sequelize";
import { JudgeService } from "./judges/judge.service";
import { encryptPassword } from "../concerns/users_utils";

export namespace UserTests {
  const fieldOfStudies = [
    "computer-science",
    "engineering",
    "business",
    "design",
    "entrepreneurship",
    "economics",
    "sustainability",
    "law",
    "communications",
    "psychology",
    "other"
  ];
  const experienceTypes = [
    "no-experience",
    "experienced-other",
    "basic",
    "intermediate",
    "experienced"
  ];

  export async function createTestUsers(count = 20) {
    const teams = [];
    const userLinkedIds = [];
    for (let i = 0; i < count; i++) userLinkedIds.push(faker.random.uuid());
    console.log(`starting to create ${count} fake users`);

    await Promise.all([
      userLinkedIds.map(async linkedInId => {
        const user: User = await User.create(linkedInId);
        await createFakeUser(user).catch(err => {
          console.log("error creating user", err);
        });
      })
    ]);
  }

  export async function createTestMentors(type, count = 20) {
    let createdUsers = [];
    for (let i = 0; i < count; i++) {
      createdUsers.push(
        User.create(sampleFakeMentorFields(type)).catch(err => {
          console.log("error creating user", err);
        })
      );
      return Promise.all(createdUsers);
    }
  }

  async function createFakeUser(user: User): Promise<any> {
    try {
      let teamParams: any = {};
      const userParams = sampleFakeUserFields();
      const { role } = userParams;
      if (role === "TeamBuilder") {
        const { codeName, codeNumber } = await TeamService.generateTeamCode();
        userParams.role = "TeamBuilder";
        teamParams = { codeName, codeNumber };
      } else if (role === "Participant") {
        const [rows, _] = await sequelize.query(
          'select * from "Teams" offset floor(random()*(select count(*) from "Teams")) limit 1;'
        );
        if (rows.length === 0) {
          userParams.role = "Loner";
        } else {
          const { codeNumber } = rows[0];
          teamParams = { codeNumber };
        }
      }
      const updatedUser: User = await UserService.finishRegistration({
        user,
        userParams,
        teamParams
      });
      console.log(`created ${updatedUser.name} with id: ${updatedUser.id}`);
    } catch (err) {
      console.log("oops somthing went wrong", err);
    }
  }

  function sampleFakeMentorFields({ defaultRole = "Mentor" }: { defaultRole: string }): any {
    const baseAttrs = this.sampleFakeMentorFields();
    baseAttrs.role = defaultRole;

    // create password
    const hashedPass = encryptPassword("Aa123123");
    baseAttrs.password = hashedPass;
  }

  function sampleFakeUserFields(): any {
    const studyYear = Math.floor(Math.random() * 4 + 1);
    const role = _.sample(["TeamBuilder", "Participant", "Participant", "Loner"]);
    return {
      name: faker.name.findName(),
      email: faker.internet.email(),
      mobile: faker.phone.phoneNumber(),
      gender: _.sample(["male", "female"]),
      academicInstitute: _.sample(_.keys(academicInstitutesMap)),
      fieldOfStudy: _.sample(fieldOfStudies),
      degreeType: _.sample(["bachelor", "master"]),
      experienceType: _.sample(experienceTypes),
      registerStatus: "review",
      role,
      studyYear
    };
  }
}
