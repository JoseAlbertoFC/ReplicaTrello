const { Task } = require("../../db");
const { Op } = require("sequelize");

const readDeletedTasks = async () => {
  try {
    const tasksDeleted = await Task.findAll({
      where: {
        deletedAt: {
          [Op.not]: null,
        },
      },
      paranoid: false,
    });
    return tasksDeleted;
  } catch (error) {
    console.log(error.message);
    throw new Error({ error: error.message });
  }
};

module.exports = {
  readDeletedTasks,
};
