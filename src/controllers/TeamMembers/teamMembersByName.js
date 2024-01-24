const { Op } = require("sequelize")
const { TeamMember, Task, Project } = require("../../db")

const teamMembersByName = async (name) => {
    try {
        const result = await TeamMember.findAll({
          where: {
            name: {
              [Op.iLike]: `%${name}%`,
            },
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
    teamMembersByName
}