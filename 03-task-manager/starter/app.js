const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const controller = require('./controllers/tasks')
require('dotenv').config()
const port = 3000;
const notFound = require('./middleware/not-found')

//midleware
app.use(express.static('./public'))
app.use(express.json())



//routes

app.use('/api/v1/tasks', tasks)

app.use(notFound)


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


