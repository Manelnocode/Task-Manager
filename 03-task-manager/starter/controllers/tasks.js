const Task = require('../models/task')




const getAllTasks = (req, res) => {
    res.send('get all tasks')
}

// porque en el caso siguiente utilizamos una funcion async? El motivo es porque estamos interactuando con una base de datos  mediatne mongoose , y las operaciones de bases de datos son inheremente operaciones i/o (input,output) que pueden llevar tiempo en completarse.

const createTask = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(200).json({task})
}

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