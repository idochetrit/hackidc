"use strict";

module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    "Role",
    {
      name: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  Role.associate = models => {
    // associations can be defined here
    Role.hasMany(models.User, {
      foreignKey: "roleId"
    });
  };
  return Role;
};
