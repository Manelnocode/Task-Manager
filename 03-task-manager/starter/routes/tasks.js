// La carpeta routes contiene el archivo que define las rutas para tu aplicación Express. Estas rutas determinan cómo se manejarán las solicitudes HTTP entrantes. En tu caso, estás definiendo las rutas para manejar las tareas (tasks).

// El router nos permite tener las rutas y sus funcionalidades separadas siendo mas escalable.

// Los routers son reutilizables




const express = require('express');
const router = express.Router();

const { getAllTasks } = require('../controllers/tasks');  

router.route('/').get(getAllTasks);  

module.exports = router;