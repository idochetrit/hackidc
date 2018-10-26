module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      gender: DataTypes.BOOLEAN,
      mobile: DataTypes.STRING,
      isStudent: DataTypes.BOOLEAN,
      degreeType: DataTypes.STRING,
      fieldOfStudy: DataTypes.STRING,
      academicInstitute: DataTypes.STRING,
      studyYear: DataTypes.INTEGER,
      experienceType: DataTypes.STRING,
      hearAboutUS: DataTypes.STRING,
      shirtSize: DataTypes.STRING,
      foodRestrictionType: DataTypes.STRING,
      volunteerToAcceptLoner: DataTypes.BOOLEAN,
      roleId: DataTypes.INTEGER,
      teamId: DataTypes.INTEGER
    },
    {}
  );
  User.associate = models => {
    // associations can be defined here
  };
  return User;
};
