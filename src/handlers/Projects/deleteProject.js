const {delProjects} = require('../../controllers/Projects/delProjects');

const deleteProject= async(req, res)=>{
    try {
        const {id} = req.params;

        if(id){
            const result = await delProjects(id);
            res.status(200).json(result);
        } else return 'Without Id this operation cannot continue. Have a great day!';
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {deleteProject};