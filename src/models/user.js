module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      gender: DataTypes.STRING,
      mobile: DataTypes.STRING,
      degreeType: DataTypes.STRING,
      fieldOfStudy: DataTypes.STRING,
      academicInstitute: DataTypes.STRING,
      studyYear: DataTypes.INTEGER,
      experienceType: DataTypes.STRING,
      hearAboutUs: DataTypes.STRING,
      shirtSize: DataTypes.STRING,
      foodRestrictionType: DataTypes.ARRAY(DataTypes.STRING),
      volunteerToAcceptLoner: DataTypes.BOOLEAN,
      cvAgree: DataTypes.BOOLEAN,
      roleId: DataTypes.INTEGER,
      teamId: DataTypes.INTEGER,
      linkedInId: DataTypes.STRING,
      userPicture: DataTypes.STRING, // URL for LinkedIn picture
      cvFile: DataTypes.BLOB("long"),
      score: DataTypes.DOUBLE,
      registerStatus: {
        type: DataTypes.ENUM,
        values: ["approved", "review", "pending", "rejected"]
      },
      rawLinkedin: DataTypes.JSONB
    },
    {
      indexes: [
        {
          unique: true,
          fields: ["email"]
        },
        {
          unique: true,
          fields: ["linkedInId"]
        }
      ]
    }
  );
  User.associate = models => {
    User.belongsTo(models.Role, {
      targetkey: "id",
      foreignKey: "roleId"
    });
    User.belongsTo(models.Team, {
      targetkey: "id",
      foreignKey: "teamId"
    });
  };
  return User;
};
