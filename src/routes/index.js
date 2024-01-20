const { Router } = require("express");
const {projectRoutes} = require('./Projects')
const { tasksRoutes } = require("./Tasks") 

const router = Router();

router.use('/', projectRoutes)
router.use("/", tasksRoutes)


module.exports = router;