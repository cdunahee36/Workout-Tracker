const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//creates a schema for the database and app to use

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: "Exercise"
        }
    ],
    totalDuration: {
        type: Number,
        default: 0
    } 
});

const Workout = mongoose.model("Workout", WorkoutSchema);

//exports schema here

module.exports = Workout;