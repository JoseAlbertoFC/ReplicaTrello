const { Router } = require("express");
const {projectRoutes} = require('./Projects')
const { tasksRoutes } = require("./Tasks"); 
const { routesForTeams } = require("./TeamMembers");

const router = Router();

router.use('/', projectRoutes)
router.use("/", tasksRoutes)
router.use('/', routesForTeams)


module.exports = router;