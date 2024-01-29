const { TeamMember } = require("../../db");
const { Op } = require("sequelize");

const readDeletedTeamMembers = async () => {
  try {
    const teamMembersDeleted = await TeamMember.findAll({
      where: {
        deletedAt: {
          [Op.not]: null,
        },
      },
      paranoid: false,
    });

    return {
      success: true,
      message: "Deleted Team Member retrieved successfully",
      teamMembersDeleted,
    };
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

module.exports = {
  readDeletedTeamMembers,
};
