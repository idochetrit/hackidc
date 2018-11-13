"use strict";

module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define(
    "Team",
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      challengeId: DataTypes.INTEGER,
      codeName: DataTypes.STRING,
      codeNumber: DataTypes.INTEGER,
      builderId: DataTypes.INTEGER
    },
    {
      indexes: [
        {
          unique: true,
          fields: ["code"]
        },
        {
          fields: ["challengeId"]
        }
      ]
    }
  );
  Team.associate = models => {
    Team.hasMany(models.User, {
      foreignKey: "teamId"
    });
    Team.belongsTo(models.User, {
      targetkey: "id",
      foreignKey: "builderId"
    });
  };
  return Team;
};
