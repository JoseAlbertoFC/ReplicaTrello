const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Project",
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
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { timestamps: false, paranoid: true }
  );
};
