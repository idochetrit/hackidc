module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      gender: DataTypes.STRING,
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
      teamId: DataTypes.INTEGER,
      linkedInId: DataTypes.STRING,
      registerStatus: {
        type: DataTypes.ENUM,
        values: ["approved", "review", "pending", "rejected"]
      },
      rawLinkedin: DataTypes.JSONB
    },
    {}
  );
  User.associate = models => {
    User.belongsTo(models.Team, {
      targetkey: "id",
      foreignKey: "teamId"
    });
  };
  return User;
};
