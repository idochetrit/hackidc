"use strict";

module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define(
    "Team",
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      challengeId: DataTypes.INTEGER,
      codeNumber: DataTypes.INTEGER,
      leaderId: DataTypes.INTEGER
    },
    {}
  );
  Team.associate = models => {
    Team.hasMany(models.User, {
      foreignKey: "teamId"
    });
    Team.belongsTo(models.User, {
      targetkey: "id",
      foreignKey: "leaderId"
    });
  };
  return Team;
};
