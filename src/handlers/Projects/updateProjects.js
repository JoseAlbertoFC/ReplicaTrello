const {updProject} = require('../../controllers/Projects/updProject');

const updateProjects = async(req, res)=>{
    try {
        const {id} = req.params;
        const {name, description} = req.body;
let result;
        if(id && isNaN(id)){
            if(!name) return res.status(400).json('No name, no Project Update, sorry');
            result = await updProject(req.body, id);
            res.status(200).json(result || 'Se actualizó mi genteeeeeee!');
        } else return 'Sin Id no creo que podamos continuar, sorry';
    } catch (error) {
        res.status(400).json({error: error.message})
        
    }
}

module.exports={updateProjects};