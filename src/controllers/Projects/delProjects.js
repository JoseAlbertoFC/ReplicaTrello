const {Project} = require('../../../src/db');

const delProjects = async(idToDelete)=>{
    try {
        let deleteThatProjectPlease;
        if(!idToDelete) return 'Without Id we cannot continue anymore, have a nice day.'
        if(!isNaN(idToDelete)) return `The datatype ${typeof idToDelete} for an id is not allowed in the system, sorry`

        const verifying = await Project.findByPk(idToDelete)

        if([verifying].length >  0 && verifying != null) {
            deleteThatProjectPlease = await Project.destroy({where: {id: idToDelete}})
            
            return `The project with the id ${idToDelete} was successfuly eliminated.`
        } else return 'Sorry, there is no evidence of that Project existing, try with another one if you want.';
    } catch (error) {
    throw new Error(error.message)    
    }
}

module.exports = {delProjects};