import * as faker from "faker";
import * as _ from "lodash";
import { User } from "./user.model";
import { academicInstitutesMap } from "./user.constants";
import { TeamService } from "../teams/team.service";
import { Team } from "../teams/team.model";
import { UserService } from "./user.service";

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
    // const userLinkedIds = [];
    // for (let i = 0; i < count; i++) userLinkedIds.push(faker.random.uuid());
    console.log(`starting to create ${count} fake users`);

    for (let i = 0; i < count; i++) {
      const linkedInId = faker.random.uuid();
      await createFakeUser(linkedInId, teams).catch(err => {
        console.log("error creating user", err);
      });
    }
  }

  async function createFakeUser(linkedInId: number, teams: Team[]): Promise<any> {
    console.log("creating user: ", linkedInId);
    const user: User = await User.create({ linkedInId });
    let teamParams: any = {};
    const userParams = sampleFakeUserFields();
    const { role } = userParams;
    if (role === "TeamBuilder" || (role === "Participant" && _.isEmpty(teams))) {
      const { codeName, codeNumber } = await TeamService.generateTeamCode();
      teamParams = { codeName, codeNumber };
      teams.push(teamParams);
    } else if (role === "Participant") {
      const { codeNumber } = _.sample(teams);
      teamParams = { codeNumber };
    }
    const updatedUser: User = await UserService.finishRegistration({
      user,
      userParams,
      teamParams
    });
    console.log(`created ${updatedUser.name} with id: ${updatedUser.id}`);
  }

  function sampleFakeUserFields(): any {
    const studyYear = Math.floor(Math.random() * 4 + 1);
    const role = _.sample(["TeamBuilder", "Participant", "Loner"]);
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
