const {getThatProjects} = require('../../controllers/Projects/getThatProjects');

const getProjects = async(req, res)=>{
    try {
        const result= await getThatProjects();

        if(result.length > 0) res.status(200).json(result);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {getProjects};