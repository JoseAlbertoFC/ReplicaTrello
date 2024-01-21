const { Router } = require("express");
const { postTask } = require("../handlers/Tasks/postTask");
const { getTasks } = require("../handlers/Tasks/getTasks");

const tasksRoutes = Router();

tasksRoutes.post("/newTask", postTask);
tasksRoutes.get("/tasks", getTasks)


module.exports = { tasksRoutes };