const { paranoidTeamMember } = require("../../controllers/TeamMembers/paranoidTeamMember");

const restoreTeamMember = async (req, res) => {
    const { id } = req.params;
  try {
    const result = await paranoidTeamMember(id);
    if (!id) return result.status(404).json({ message: "Team Member not found" });
    res.status(200).json({ message: "Team Member restored successfully", result });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
    throw new Error(error.message);
  }
}

module.exports = {
    restoreTeamMember,
}