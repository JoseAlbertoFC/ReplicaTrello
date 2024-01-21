const { Op } = require("sequelize")
const { Task, Project, TeamMember } = require("../../db");


const readTasksByName = async (name) => {
  try {
    const result = await Task.findAll({
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
  readTasksByName,
};
