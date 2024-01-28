const { TeamMember, Task, Project } = require("../../db");
const { Op } = require("sequelize");

const teamMembersByQuery = async (queryVars) => {
  try {
    const whereCondition = {};
    const keyValues = ["id", "name", "rol"];

    await Promise.all(
      Object.entries(queryVars).map(async ([key, value]) => {
        switch (key) {
          case "id": {
            whereCondition["id"] = await TeamMember.findByPk(value, {
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
            break;
          }
          case "name": {
            whereCondition["name"] = await TeamMember.findAll({
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
                  model: Task,
                  as: "task",
                },
              ],
            });
            break;
          }
          case "rol": {
            whereCondition["rol"] = await TeamMember.findAll({
              where: {
                rol: value,
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
  teamMembersByQuery,
};
