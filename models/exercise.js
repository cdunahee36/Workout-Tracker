const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//creates a schema for the exercises

const ExerciseSchema = new Schema({
    type: String,
    name: String,
    distance: Number,
    duration: Number,
    weight: Number,
    sets: Number,
    reps: Number
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

//exports the schema

module.exports = Exercise;
