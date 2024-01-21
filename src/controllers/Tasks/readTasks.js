const { Task, Project, TeamMember } = require("../../db")

const readTasks = async () => {
    try {
        return await Task.findAll({
            include: [
                {
                    model: Project,
                    as: "project"
                },
                {
                    model: TeamMember,
                    as: "teamMember"
                }
            ],
        })
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    readTasks,
};