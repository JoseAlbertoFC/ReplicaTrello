// Acá van los controllers de Projects
const {Project} = require('../../db');
const createProject = async(info)=> {
    try {
        if(!info) return 'Im so sorry, if theres no information, we cannot be able to continue the process.';
        else if(!info.name) return "If you don't give us a name, what's the point of sending this?";

        const [project, created] = await Project.findOrCreate({
            where: {name: info.name},
            defaults: {...info}
        })
         console.log(created);
    if(project?.length > 0 && created == false) return {message: 'Succesfully created', information: [...project]}
    else if(project?.length > 0 && created == true) return {message: 'We succesfully found an instance with the same name!', information: [...project]}
    } catch (error) {
        throw new Error (error.message);
    }
}

module.exports={createProject};