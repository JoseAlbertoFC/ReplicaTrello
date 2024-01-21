const { Task, Project, TeamMember } = require("../../db");

const readTasksByStatus = async (status) => {
  try {
    const result = await Task.findAll({
      where: {
        status: status ,
      },
      include: [
        {
          model: Project,
          as: "project",
        },
        {
          model: TeamMember,
          as: "teamMember",
        },
      ],
    });
    return result;
  } catch (error) {
    console.log(error.message)
    throw new Error(error.message);
  }
};

module.exports = {
  readTasksByStatus,
};
