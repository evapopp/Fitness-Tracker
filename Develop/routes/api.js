const router = require('express').Router();
const Workout = require('../models/workout');


router.get('/api/workouts', async (req, res) => {
    const workoutData = await Workout.aggregate([
        {
            $addFields: {
                duration: { $sum: '$exercise.duration' }
            }
        }
    ])
    res.status(200).json(workoutData);
})
 
router.get('/api/workouts/range', async (req, res) => {
    const workoutDataRange = await Workout.aggregate([
        {
            $addFields: {
                duration: { $sum: '$exercise.duration' }
            }
        }
    ])
    res.status(200).json(workoutDataRange);
})

router.post('/api/workouts', async ({body}, res) => {
    const workoutCreate = await Workout.create(body)
    res.status(200).json(workoutCreate);
});
