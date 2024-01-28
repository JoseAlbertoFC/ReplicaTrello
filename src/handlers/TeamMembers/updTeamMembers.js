const {updateMembers} = require('../../controllers/TeamMembers/updateMembers')

const updTeamMembers= async(req, res)=>{
    try {
        const {id}= req.params;
        const {name, rol} = req.body;

        if(id && name) {
            const updateThatThing = await updateMembers({name, rol}, id);
            res.status(200).json(updateThatThing);
        } else res.status(400).json('Without id and name we cant do anything, sorry.')

    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports={
    updTeamMembers
}