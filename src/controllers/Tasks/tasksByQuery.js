const { Op } = require("sequelize")
const { Task, Project, TeamMember } = require("../../db");

const tasksByQuery = async (queryVars) => {
  try {
    const whereCondition = {};
    const keyValues = ["name", "status"];

    await Promise.all(
      Object.entries(queryVars).map(async ([key, value]) => {
        switch (key) {
          case "name": {
            whereCondition["name"] = await Task.findAll({
              where: {
                name: {
                  [Op.iLike]: `%${value}%`,
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
            break;
          }
          case "status": {
            whereCondition["status"] = await Task.findAll({
              where: {
                status: value,
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
            break;
          }
          default: {
            keyValues.includes(key)
              ? (whereCondition[key] = value)
              : (whereCondition[key] = { [Op.iLike]: `%${value}%` });
          }
        }
      })
    );

    return whereCondition;
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

module.exports = {
  tasksByQuery,
};
