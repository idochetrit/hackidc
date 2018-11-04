import _ from "lodash";
import models from "../models";

const { Role } = models;

export default (() => {
  class UserRole {
    async getByName(name) {
      const role = await Role.findOne({
        where: { name },
        attributes: ["id"]
      });
      return role;
    }
  }

  return new UserRole();
})();
