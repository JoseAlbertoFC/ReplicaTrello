const { TeamMember } = require("../../db");

const paranoidTeamMember = async (id) => {
  try {
    const teamMemberToRestore = await TeamMember.findByPk(id, { paranoid: false });
    return await teamMemberToRestore.restore();
  } catch (error) {
    console.log(error.message)
    throw new Error(error.message);
  }
};

module.exports = {
  paranoidTeamMember,
};
