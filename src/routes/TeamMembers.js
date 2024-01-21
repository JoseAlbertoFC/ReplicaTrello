// Acá van las rutas de TeamMembers
const {Router}= require('express');
const { postTeamMember } = require('../handlers/TeamMembers/postTeamMember');

const routesForTeams = Router();

routesForTeams.post('/createTMs', postTeamMember);

module.exports={routesForTeams};