const { TeamMember } = require("../../db");

const destroyTeamMember = async (id) => {
    try {
        const teamMember = await TeamMember.findByPk(id);
        if (teamMember) {
          await teamMember.destroy({ where: { id: id } });
          return true;
        }
      } catch (error) {
        throw new Error(error.message);
      }
}

module.exports = {
    destroyTeamMember,
}