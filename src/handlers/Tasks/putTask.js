const { updateTask } = require("../../controllers/Tasks/updateTask");

const putTask = async (req, res) => {
  const { id } = req.params;
  const { name, description, status } = req.body;

  try {
    const result = await updateTask(id, {
      name,
      description,
      status,
    });
    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
    throw new Error(error.message);
  }
};

module.exports = {
  putTask,
};
