// date, name, type, weight, sets, reps, and duration of exercise, distance

const mongoose = require('mongoose');

new Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    exercises:[
        {
            name: {
                type: String,
                trim: true,
            },
            type: {
                type: String,
                trim: true,
            },
            weight: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            duration: {
                type: Number,
            },
            distance: {
                type: Number,
            },
        },
    ]

});

const Workout = mongoose.model('Workout', Workout);

module.exports = Workout;