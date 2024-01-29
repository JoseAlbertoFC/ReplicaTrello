const {
  destroyTeamMember,
} = require("../../controllers/TeamMembers/destroyTeamMember");

const deleteTeamMember = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await destroyTeamMember(id);
    if (result === 0)
      return res.status(400).json("This TeamMember was not deleted correctly");
    res.status(200).json("This TeamMember was successfully removed");
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
    throw new Error(error.message);
  }
};

module.exports = {
  deleteTeamMember,
};
