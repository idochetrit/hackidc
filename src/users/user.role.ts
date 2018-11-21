import * as _ from "lodash";
import { Role } from "../roles/role.model";

export default (() => {
  class UserRole {
    public async getByName(name) {
      const role = await Role.findOne({
        where: { name },
        attributes: ["id"]
      });
      return role;
    }
  }

  return new UserRole();
})();
