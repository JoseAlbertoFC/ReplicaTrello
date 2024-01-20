// Acá van los handlers de Projects

const { createProject } = require("../../controllers/Projects/createProject");

const postProject = async(req, res)=>{
    try {
        const {name, description} = req.body;

        if(!name) res.status(400).json('Sorry bud, without name we cant do anything.')

        const results = await createProject({name, description});
        const secondResults = [results];

        if(secondResults.length == 0) res.status(400).json('Nope, there wasnt any data in the database. Try later pal!');
        res.status(200).json(results);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}
module.exports={postProject};