const { Task } = require("../../db");

const paranoidTask = async (id) => {
  try {
    const taskToRestore = await Task.findByPk(id, { paranoid: false });
    return await taskToRestore.restore();
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  paranoidTask,
};
