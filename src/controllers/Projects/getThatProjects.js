const {Project} = require('../../../src/db');

const getThatProjects = async()=>{
    try {
        const every1IsLooking4Something = await Project.findAll();
console.log(every1IsLooking4Something);
        if(every1IsLooking4Something.length>0) return every1IsLooking4Something;
        else return `The datatype is ${typeof every1IsLooking4Something}, so length may not work`;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports={getThatProjects};