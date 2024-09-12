const express = require('express');
const router = express.Router();
const workout = require('../models/workoutModel')
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

//Get all workouts
router.get('/', getWorkouts)

//Get one workout
router.get('/:id', getWorkout)

//Insert a new workout
router.post('/', createWorkout)

//Delete a workout
router.delete('/:id', deleteWorkout)

//Update a workout
router.patch('/:id', updateWorkout)

module.exports = router;