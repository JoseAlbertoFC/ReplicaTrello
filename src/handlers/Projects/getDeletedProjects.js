const {readSoftDeletedProjects} = require('../../controllers/Projects/readSoftDeletedProjects')

const getDeletedProjects = async(req, res)=>{
    try {
        const theDeletedProjects = await readSoftDeletedProjects();

        if(theDeletedProjects!= null) res.status(200).json(theDeletedProjects)
        else res.status(400).json(theDeletedProjects)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports={getDeletedProjects};