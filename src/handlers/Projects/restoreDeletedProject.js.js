const {restoreProjects} = require('../../controllers/Projects/restoreProjects');


const restoreDeletedProject = async(req, res)=>{
    try {
        const {id} = req.params;

        const restore = await restoreProjects(id);

        if(restore != null) res.status(200).json(restore)
        else res.status(400).json(restore);
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports={restoreDeletedProject};