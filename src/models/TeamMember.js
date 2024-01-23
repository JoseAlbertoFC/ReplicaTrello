const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "TeamMember",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
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
    { timestamps: true, paranoid: true }
  );
};