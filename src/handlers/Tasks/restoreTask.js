const { paranoidTask } = require("../../controllers/Tasks/paranoidTask");

const restoreTask = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await paranoidTask(id);
    if (!id) return result.status(404).json({ message: "Task not found" });
    res.status(200).json({ message: "Task restored successfully", result });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
    throw new Error(error.message);
  }
};

module.exports = {
  restoreTask,
};
