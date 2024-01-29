// Acá van las rutas de TeamMembers
const {Router}= require('express');
const { postTeamMember } = require('../handlers/TeamMembers/postTeamMember');
const { getTeamMembers } = require('../handlers/TeamMembers/getTeamMembers');
const { updTeamMembers } = require('../handlers/TeamMembers/updTeamMembers');
const { deleteTeamMember } = require('../handlers/TeamMembers/deleteTeamMember');
const { getDeletedTeamMembers } = require('../handlers/TeamMembers/getDeletedTeamMembers');
const { restoreTeamMember } = require('../handlers/TeamMembers/restoreTeamMember');

const routesForTeams = Router();

routesForTeams.post("/readTMs", getTeamMembers);
routesForTeams.post('/createTMs', postTeamMember);
routesForTeams.put('/updTMs/:id', updTeamMembers);
routesForTeams.delete("/deleteTMs/:id", deleteTeamMember);  
routesForTeams.get("/deletedTMs", getDeletedTeamMembers);
routesForTeams.put("/restoreTMs/:id", restoreTeamMember);


module.exports={routesForTeams};