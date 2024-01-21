// Acá van las rutas de Projects
const {Router} = require('express');
const { postProject } = require('../handlers/Projects/postProject');
const {getProjects} = require('../handlers/Projects/getProjects');
const { updateProjects } = require('../handlers/Projects/updateProjects');
const { deleteProject } = require('../handlers/Projects/deleteProject');

const projectRoutes = Router()

projectRoutes.post('/createProject', postProject)
.get('/getPro', getProjects)
.put('/updPro/:id', updateProjects)
.delete('/deletePro/:id', deleteProject)
// 
module.exports = {projectRoutes};