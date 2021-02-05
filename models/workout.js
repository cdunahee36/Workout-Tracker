const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//creates a schema for the database and app to use

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
      },
      exercises: [
          {
            type: {
              type: String,
              trim: true,
              required: true
            },
            name: {
              type: String,
              trim: true,
              required: true
            },
            duration: {
              type: Number,
              required: true
            },
            weight: {
              type: Number
            },
            reps: {
              type: Number
            },
            sets: {
              type: Number
            },
            distance: {
              type: Number
            }
        }
      ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

//exports schema here

module.exports = Workout;