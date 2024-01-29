const {Project} = require('../../../src/db');

const restoreProjects = async(idToRestore)=>{
    try {
        if(!idToRestore) return 'Ok, you need to give me an id for this process, so...'
        if(!isNaN(idToRestore)) 'Ajá, trying to give me something that not is an UUID, this is an ' + typeof idToRestore + '!'

        const restoreTheProject = await Project.findByPk(idToRestore, {paranoid: false});

        if([restoreTheProject].length >0) return await restoreTheProject.restore()
        else return `Something is different here... verify your id please.`;


    } catch (error) {
        throw new Error (error.message);
    }
}

module.exports={restoreProjects}