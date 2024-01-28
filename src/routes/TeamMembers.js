// Acá van las rutas de TeamMembers
const {Router}= require('express');
const { postTeamMember } = require('../handlers/TeamMembers/postTeamMember');
const { getTeamMembers } = require('../handlers/TeamMembers/getTeamMembers');

const routesForTeams = Router();

routesForTeams.post('/createTMs', postTeamMember);
routesForTeams.post("/readTMs", getTeamMembers)

module.exports={routesForTeams};