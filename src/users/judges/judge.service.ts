import * as _ from "lodash";

import { User } from "../user.model";
import { Sequelize } from "sequelize-typescript";
import * as bcrypt from "bcryptjs";
import { JUDGE_SANITIZED_FIELDS } from "../user.constants";

export class JudgeService {
  public static async createLocalAuthUser(profile: any) {
    const defaultAttrs: any = {
      email: profile.email,
      name: profile.name
    };

    defaultAttrs.password = await this.encryptPassword(profile.password);

    return User.findOrCreate({
      defaults: defaultAttrs,
      where: Sequelize.and({ email: defaultAttrs.email })
    })
      .spread((user: any, _created: any) => user)
      .catch((err: Error) => {
        console.log(err, defaultAttrs);
      });
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
