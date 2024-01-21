const { readTasks } = require("../../controllers/Tasks/readTasks");
const {
  readTasksByStatus,
} = require("../../controllers/Tasks/tasksByStatus");
const { readTasksByName } = require("../../controllers/Tasks/tasksByName");

const getTasks = async (req, res) => {
  const { name, status } = req.query;

  try {
    if (status) {
      const tasksByStatus = await readTasksByStatus(status);
      res.status(200).json(tasksByStatus);
    } else if (name) {
      const tasksByName = await readTasksByName(name);
      res.status(200).json(tasksByName);
    } else {
      const allTasks = await readTasks();
      res.status(200).json(allTasks);
    }
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getTasks,
};

