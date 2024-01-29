// Acá van las rutas de Projects
const {Router} = require('express');
const { postProject } = require('../handlers/Projects/postProject');
const {getProjects} = require('../handlers/Projects/getProjects');
const { updateProjects } = require('../handlers/Projects/updateProjects');
const { deleteProject } = require('../handlers/Projects/deleteProject');
const { getDeletedProjects } = require('../handlers/Projects/getDeletedProjects');
const { restoreDeletedProject } = require('../handlers/Projects/restoreDeletedProject.js');

const projectRoutes = Router()

projectRoutes.post('/createProject', postProject)
.get('/getPro', getProjects)
.put('/updPro/:id', updateProjects)
.delete('/deletePro/:id', deleteProject)
.get('/readDeletedP', getDeletedProjects)
.get('/restoreProject/:id', restoreDeletedProject)
// 
module.exports = {projectRoutes};