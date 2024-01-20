const { createTask } = require("../../controllers/Tasks/createTask");

const postTask = async (req, res) => {
  const { name, description, status } = req.body;

  try {
    const result = await createTask(name, description, status);
    console.log("*****************************************")
    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
    throw new Error(error.message);
  }
};

module.exports = { postTask };
