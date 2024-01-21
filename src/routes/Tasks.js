const { Router } = require("express");
const { postTask } = require("../handlers/Tasks/postTask");
const { getTasks } = require("../handlers/Tasks/getTasks");
const { deleteTask } = require("../handlers/Tasks/deleteTask")

const tasksRoutes = Router();

tasksRoutes.post("/newTask", postTask);
tasksRoutes.get("/tasks", getTasks)
tasksRoutes.delete("/deleteTask/:id", deleteTask);


module.exports = { tasksRoutes };