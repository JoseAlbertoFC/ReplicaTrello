const { Task, Project, TeamMember } = require("../../db");

const teamMembersByRol = async (rol) => {
    try {
        const result = await TeamMember.findAll({
          where: {
            rol: rol ,
          },
          include: [
            {
              model: Project,
              as: "project",
            },
            {
              model: Task,
              as: "task",
            },
          ],
        });
        return result;
      } catch (error) {
        console.log(error.message)
        throw new Error(error.message);
      }
}

module.exports = {
    teamMembersByRol,
}