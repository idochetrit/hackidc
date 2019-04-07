import * as _ from "lodash";

import { User } from "../user.model";
import { Sequelize } from "sequelize-typescript";
import { JUDGE_SANITIZED_FIELDS } from "../user.constants";
import { encryptPassword } from "../../concerns/users_utils";
import { UserService } from "../user.service";

export const FINAL_JUDGES = [
  "uriel_reichman",
  "ariel_shamir",
  "moran_nir",
  "lior_noy",
  "iddo_gino",
  "roei_deutsch",
  "yossi_maaravi",
  "son_preminger",
  "tal_zackon",
  "revital_hollander",
  "assaf_rappaport",
  "yasmin_lukatz",
  "gil_golan"
];
export class JudgeService {
  public static async createLocalAuthUser(profile: any) {
    const defaultAttrs: any = {
      email: profile.email,
      name: profile.name,
      roleId: profile.roleId || 3 // JUDGE / MENTOR
    };
    console.log(profile);

    defaultAttrs.password = await encryptPassword(profile.password);

    return User.findOrCreate({
      defaults: defaultAttrs,
      where: Sequelize.and({ email: defaultAttrs.email })
    })
      .spread((user: any, _created: any) => user)
      .catch((err: Error) => {
        console.log(err, defaultAttrs);
      });
  }

  public static async getJudgeByName(email: string) {
    try {
      return User.findOne({
        where: {
          email
        }
      });
    } catch (error) {
      console.log("Failed to retrieve judge: ", error);
      throw error;
    }
  }

  public static async isFinalRoundJudge(judgeId: number): Promise<boolean> {
    try {
      const { email } = await UserService.findById(judgeId);
      return _.includes(FINAL_JUDGES, email);
    } catch (err) {
      console.log("Failed to fetch user (Judge)", err);
      throw err;
    }
  }

  public static async sanitize(
    user: User,
    sanitizeFields = JUDGE_SANITIZED_FIELDS,
    { withDeps = true } = {}
  ) {
    if (!user) {
      throw new Error("no user given");
    }
    let sanitizedParams = _.pick(user, ...sanitizeFields);

    if (withDeps) {
      const role = await user.$get("role");
      sanitizedParams.role = _.get(role, "name") || "Unavailable";
    }

    return sanitizedParams;
  }

  public static extractUserParams(params: any, sanitizedFields = JUDGE_SANITIZED_FIELDS) {
    return _.chain(params)
      .get("user")
      .pick(sanitizedFields)
      .omit("id")
      .value();
  }
}
