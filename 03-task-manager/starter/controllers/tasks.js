// La carpeta de controladores, maneja varias funciones para cada ruta que sera definida en la carpeta de routes

// res es el objeto de respuesta que se usa para enviar la respuesta al cliente
// req es el objeto de la solicitud que contiene informacion sobre la solicitud HTTP entrante.


const getAllTasks = (req, res) => {
    res.send('get all tasks')
}

const createTask = (req, res) => {
    res.json(req.body)
}

// En este caso estamos solicitando informacion sobre la id de la ruta seteada :id por ejemplo /tasks/123
/* esta es la respuesta que obtenemos: 
{
    "id": "hello"
}
*/


const getTask = (req, res) => {
    res.json({id:req.params.id})
}

const updateTask = (req, res) => {
    res.send('create task')
}

const deleteTask = (req, res) => {
    res.send('create task')
}




module.exports = {
    getAllTasks,createTask,getTask,updateTask,deleteTask
}