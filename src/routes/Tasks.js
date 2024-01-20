const { Router } = require("express");
const { postTask } = require("../handlers/Tasks/postTask");

const tasksRoutes = Router();

tasksRoutes.post("/newTask", postTask);

module.exports = { tasksRoutes };