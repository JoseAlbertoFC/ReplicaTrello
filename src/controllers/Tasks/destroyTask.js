const { Task } = require("../../db");

const destroyTask = async (id) => {
  try {
    const task = await Task.findByPk(id);
    if (task) {
      await Task.destroy({ where: { id: id } });
      return true;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  destroyTask,
};
