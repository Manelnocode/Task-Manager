const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const controller = require('./controllers/tasks')
require('dotenv').config()
const port = 3000;
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/errorHandler')

//midleware
app.use(express.static('./public'))
app.use(express.json())



//routes

app.use('/api/v1/tasks', tasks)

// Este midlleware de url no encontrada, solo se ejecutara si la ruta no es cualquiera de las que estan difinidas arriba. Porque? Porque en express se ejecutan las solicitudes de arriba a abajo y en el caso de middleware, si ya hay una ruta encontrada, no pasara a analizar al siguiente en la cola.
app.use(notFound)
app.use(errorHandlerMiddleware)


// Server and database connection

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();


