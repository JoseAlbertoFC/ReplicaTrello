const {
  readTeamMembers,
} = require("../../controllers/TeamMembers/readTeamMembers");
const {
  teamMembersByName,
} = require("../../controllers/TeamMembers/teamMembersByName");
const {
  teamMembersByRol,
} = require("../../controllers/TeamMembers/teamMembersByRol");
const {
  teamMembersById,
} = require("../../controllers/TeamMembers/teamMembersById");

const getTeamMembers = async (req, res) => {
  const { id, name, rol } = req.query;

  try {
    if (rol) {
      const tmsByRol = await teamMembersByRol(rol);
      res.status(200).json(tmsByRol);
    } else if (name) {
      const tmsByName = await teamMembersByName(name);
      res.status(200).json(tmsByName);
    } else if (id) {
      const tmsById = await teamMembersById(id);
      res.status(200).json(tmsById);
    } else{
    const allTeamMembers = await readTeamMembers();
    res.status(200).json(allTeamMembers);
    }
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
    throw new Error(error.message);
  }
};

module.exports = {
  getTeamMembers,
};
