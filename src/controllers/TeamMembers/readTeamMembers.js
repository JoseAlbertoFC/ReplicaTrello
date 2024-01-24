const { TeamMember, Task, Project } = require("../../db")

const readTeamMembers = async () => {
    try {
        return await TeamMember.findAll({
            include: [
                {
                    model: Project,
                    as: "project"
                },
                {
                    model: Task,
                    as: "task"
                }
            ],
        })
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    readTeamMembers,
}