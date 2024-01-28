const { Router } = require("express");
const { postTask } = require("../handlers/Tasks/postTask");
const { getTasks } = require("../handlers/Tasks/getTasks");
const { deleteTask } = require("../handlers/Tasks/deleteTask");
const { putTask } = require("../handlers/Tasks/putTask");
const { restoreTask } = require("../handlers/Tasks/restoreTask");
const { getDeletedTasks } = require("../handlers/Tasks/getDeletedTasks");

const tasksRoutes = Router();

tasksRoutes.post("/newTask", postTask);
tasksRoutes.post("/tasks", getTasks)
tasksRoutes.get("/deletedTasks", getDeletedTasks)
tasksRoutes.delete("/deleteTask/:id", deleteTask);
tasksRoutes.put("/updateTask/:id", putTask);
tasksRoutes.put("/restoreTask/:id", restoreTask);

module.exports = { tasksRoutes };