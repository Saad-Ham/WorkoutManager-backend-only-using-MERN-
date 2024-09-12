const express = require('express');
const app = express();
const workoutRoutes = require('./routes/workouts');
const mongoose = require('mongoose');
require('dotenv').config();

app.use(express.json());

//Routes
app.use('/api/workouts', workoutRoutes);

//Connect to database
mongoose.connect(process.env.Mongo_URL)
 .then(() => {
    app.listen(process.env.port , () => {
        console.log('Connected to database and the Server is listening at the port ', process.env.port, '!!!');
    });
  })
 .catch((error) => {
    console.log(error);
  })

//Middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})