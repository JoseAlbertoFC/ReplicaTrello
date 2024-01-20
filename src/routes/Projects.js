// Acá van las rutas de Projects
const {Router} = require('express');
const { postProject } = require('../handlers/Projects/postProject');

const projectRoutes = Router()

projectRoutes.post('/createProject', postProject);

module.exports = {projectRoutes};