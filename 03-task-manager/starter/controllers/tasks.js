const Task = require('../models/task')




const getAllTasks = async (req, res) => {
    try{
    const tasks = await Task.find({})
    res.status(200).json({tasks})
    }
    catch(error) {
        res.status(500).json({ msg: error })
    }
}

const createTask = async (req, res) => {
    try{
        const task = await Task.create(req.body)
        res.status(201).json({task})
    }
    catch(error){
        res.status(500).json({ msg: error })
    }
}

const getTask = async (req, res) => {
    try {
        //extraemos el parametro id de req.params
        const {id:taskID} = req.params
        // Buscamos en la base de datos el id y lo recibimos como resputesta.
        const task = await Task.findOne({_id:taskID})
        // Si el id en la base de datos no existe mandamos error.
        if(!task) {
            return res.status(404).json({msg:`No task with the id ${taskID}`})
        }
        res.status(200).json({ task })

    } catch (error) {
        res.status(500).json({ msg: error })
    }
}


const deleteTask = async (req, res) => {
    try {
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id: taskID})
        
        if(!task) {
        return res.status(404).json({msg:`No task with the id ${taskID}`})
    }
    res.status(200).json({ task })
}

catch(error){
    res.status(500).json({ msg: error})
}

}

const updateTask = async (req, res) => {
    const {id:taskID} = req.params;

    try {
        const {id:taskID} = req.params;

        const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
            new: true,
            runValidators: true,
        })
        
        if(!task) {
            return res.status(404).json({msg:`No task with the id ${taskID}`})
        }
        
        res.status(200).json({ task })

    } catch (error) {
        res.status(500).json({ msg: error})
    }
}


module.exports = {
    getAllTasks,createTask,getTask,updateTask,deleteTask
}