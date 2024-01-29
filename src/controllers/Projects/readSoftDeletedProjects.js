const {Project} =require('../../db');
const {Op} = require('sequelize')

const readSoftDeletedProjects = async()=>{
    try {
        const findThoseProjects = await Project.findAll({
            where: {
                deletedAt: {
                    [Op.not] : null,
                },
            },
            paranoid: false
        })
console.log(findThoseProjects)
        if(findThoseProjects?.length > 0) return findThoseProjects
        else return 'Something went wrong, sorry'
    } catch (error) {
throw new Error (error.message)
    }
}

module.exports={readSoftDeletedProjects}