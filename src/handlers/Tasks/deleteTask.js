const { destroyTask } = require("../../controllers/Tasks/destroyTask");

const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await destroyTask(id);
    if (result === 0) return res.status(400).json("This Task was not deleted correctly");
    res.status(200).json("This Task was successfully removed");
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
    throw new Error(error.message);
  }
};

module.exports = {
  deleteTask,
};
