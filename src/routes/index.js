const { Router } = require("express");
const { tasksRoutes } = require("./Tasks") 

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/", tasksRoutes)

module.exports = router;