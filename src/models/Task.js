const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Task",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull:false,
        defaultValue: Sequelize.UUIDV4
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.ENUM("Pending", "In Process", "Waiting for Approval", "Completed")
      }
    },
    { timestamps: false, paranoid: true }
  );
};