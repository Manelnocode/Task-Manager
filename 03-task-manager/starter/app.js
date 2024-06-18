const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect');
const controller = require('./controllers/tasks')
require('dotenv').config();
const port = 5000;

//midleware

app.use(express.json())



//routes

app.use('api/v1/tasks', tasks)




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


