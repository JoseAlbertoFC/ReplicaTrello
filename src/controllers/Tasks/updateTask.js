const { Task } = require("../../db");

const updateTask = async (id, { name, description, status }) => {
  try {
    const task = await Task.findByPk(id);
    if (!task) {
      throw new Error("Task not found");
    }

    task.name = name;
    task.description = description;
    task.status = status;

    await task.save();

    return task;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  updateTask,
};
