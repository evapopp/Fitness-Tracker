const router = require('express').Router();
// const { findByIdAndUpdate } = require('../models/workout');
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
});
 
router.get('/api/workouts/range', async (req, res) => {
    const workoutDataRange = await Workout.aggregate([
        {
            $addFields: {
                duration: { $sum: '$exercise.duration' }
            }
        }
    ])
    res.status(200).json(workoutDataRange);
});


router.post('/api/workouts', async ({body}, res) => {
    const workoutCreate = await Workout.create(body)
    res.status(200).json(workoutCreate);
    console.log('new workout created!')
});

router.put('/api/workouts/:id', async ({ body, params }, res) => {
    const workoutUpate = await Workout.findByIdAndUpdate(
        params.id, {
            $push: { exercises: body }
        })
    res.status(200).json(workoutUpate);
});

module.exports = router;