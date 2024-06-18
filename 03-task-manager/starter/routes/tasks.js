// La carpeta routes contiene el archivo que define las rutas para tu aplicación Express. Estas rutas determinan cómo se manejarán las solicitudes HTTP entrantes. En tu caso, estás definiendo las rutas para manejar las tareas (tasks).

// El router nos permite tener las rutas y sus funcionalidades separadas siendo mas escalable.

// Los routers son reutilizables


const express = require('express');
const router = express.Router();

const { getAllTasks,createTask,getTask,updateTask,deleteTask } = require('../controllers/tasks');  

// syntax para router.route = router.route('/ruta).metodoGTTP(callback)
// Define un metodo HTTP com get,post etc y pasa una funcion callback que manejara la logica de la solictud/respuesta

// primero definimos la ruta en donde luego vamos a setear el metodo y luego la funcion callback

router.route('/')
.get(getAllTasks).post(createTask)

router.route('/:id')
.get(getTask)
.patch(updateTask)
.delete(deleteTask)

module.exports = router;