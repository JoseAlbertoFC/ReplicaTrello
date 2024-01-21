const { readTasks } = require("../../controllers/Tasks/readTasks");

const getTasks = async (req, res) => {
  try {
    const result = await readTasks();
    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
    throw new Error(error.message);
  }
};

module.exports = {
  getTasks,
};
