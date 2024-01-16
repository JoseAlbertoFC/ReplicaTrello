const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "TeamMember",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rol: {
        type: DataTypes.ENUM("Backend", "Frontend"),
        allowNull: true,
      },
    },
    { timestamps: false, paranoid: true }
  );
};