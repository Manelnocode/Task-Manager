const mongoose = require('mongoose') 

// En el esquema convertimos las propiedades a objeto para añadir validadores. En este caso los validadores de nombre estan advirtiendo de las caracteristicas que deben cumplir para ser pasados a la base de datos.

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength:[20, 'name can not be more than 20 characters']
        },
    completed: {
        type: Boolean,
        default: false
    }
}) 



module.exports = mongoose.model('task', TaskSchema)