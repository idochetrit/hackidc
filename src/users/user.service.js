const { User } = require("../models");

export default (() => {
  class UserService {
    createUser(params) {
      return params;
    }

    registerWithLinkedIn(profile, accessToken) {
      
      const {profile.acce}
      const user = new User.findOne(p


      );
      return newUser;
    }

    sanitize(userIn) {
      return this.findById(userIn.id).then(user => {
        // const { name: fullName } = user;
        const fullName = "Smpale";
        return { fullName };
      });
    }

    findById(id) {
      return User.findByPk(id);
    }
  }

  return new UserService();
})();
