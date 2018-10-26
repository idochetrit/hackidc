import Model from "../models";

const { User } = Model;

export default (() => {
  class UserService {
    createUser(params) {
      return params;
    }

    sanitize(userIn) {
      return User.findByPk(userIn.id).then(user => {
        // const { name: fullName } = user;
        const fullName = "Smpale";
        return { fullName };
      });
    }
  }
  return new UserService();
})();
