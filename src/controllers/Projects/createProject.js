// Acá van los controllers de Projects
const {Project} = require('../../../src/db');
const createProject = async(info)=> {
    try {

        if(!info) return 'Im so sorry, if theres no information, we cannot be able to continue the process.';
        else if(!info.name) return "If you don't give us a name, what's the point of sending this?";
const {name, description} = info;
      const letsCreate = await Project.create({name, description})
    
    if(letsCreate) return letsCreate
    } catch (error) {
        throw new Error (error.message);
    }
}

module.exports={createProject};