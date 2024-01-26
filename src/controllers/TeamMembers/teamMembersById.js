const { TeamMember, Task, Project } = require("../../db")

const teamMembersById = async (id) => {
    try {
        const result = await TeamMember.findByPk(id, {
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
    teamMembersById,
}