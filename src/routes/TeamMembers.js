// Acá van las rutas de TeamMembers
const {Router}= require('express');
const { postTeamMember } = require('../handlers/TeamMembers/postTeamMember');
const { getTeamMembers } = require('../handlers/TeamMembers/getTeamMembers');
const { updTeamMembers } = require('../handlers/TeamMembers/updTeamMembers');

const routesForTeams = Router();

routesForTeams.post("/readTMs", getTeamMembers)
routesForTeams.post('/createTMs', postTeamMember)
.put('/updTMs/:id', updTeamMembers)




module.exports={routesForTeams};