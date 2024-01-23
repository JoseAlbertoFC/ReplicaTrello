const { readDeletedTasks } = require("../../controllers/Tasks/readDeletedTaks")

const getDeletedTasks = async (req, res) => {
try {
    const result = await readDeletedTasks();
    if (!result) return res.status(404).json({message: "No eliminated Tasks were found"})
    res.status(200).json(result)
} catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
    throw new Error(error.message);
}
}

module.exports = {
    getDeletedTasks,
}