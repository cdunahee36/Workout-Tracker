//This pulls the two created models

const db = require('../models')
module.exports = (app) => {

    //this get method finds all of the workouts

    app.get("/api/workouts", (req, res) => {
      db.Workout.find({}).then(dbWorkout => {
          res.json(dbWorkout);
      })
      .catch(err => {
          res.status(400).json(err);
      });
      })

    //this get method finds all the workout ranges

    app.get("/api/workouts/range", ({}, res) => {
      db.Workout.find({}).then((dbWorkout) => {
        res.json(dbWorkout);
      }).catch(err => {
        res.status(400).json(err);
      });
    });

    //this post method allows the user to create a workout

    app.post("/api/workouts/", (req, res) => {
      db.Workout.create(req.body).then((dbWorkout) => {
        res.json(dbWorkout);
      }).catch(err => {
          res.status(400).json(err);
        });
    });

    //this put method allows the user to update a workouts

    app.put("/api/workouts/:id", (req, res) => {
      db.Workout.findByIdAndUpdate(
        { _id: req.params.id }, { exercises: req.body }
      ).then((dbWorkout) => {
        res.json(dbWorkout);
      }).catch(err => {
        res.status(400).json(err);
      });
  });


}