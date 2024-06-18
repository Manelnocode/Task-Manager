const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://Manel:25ACap4CkjnrJctr@taskmanager.uiwapc1.mongodb.net/?retryWrites=true&w=majority&appName=taskManager'

const connectDB = (url) => {
    return mongoose.connect(connectionString)
}

module.exports = connectDB