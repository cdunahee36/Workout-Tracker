//This pulls the two created models

const db = require('../models')
module.exports = (app) => {

    //this get method finds all of the workouts

    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}, (err, workouts) => {
            if(err){
                console.log(err);
            } else {
                res.json(workouts)
            }
        });
    });

    //this get method finds all the workout ranges

    app.get("/api/workouts/range", (req, res) => {
      db.Workout.find({}, (err, range) => {
          if(err){
              console.log(err);
          } else {
              res.json(range)
          }
      });
    });

    //this put method allows the user to update a workouts

    app.put("/api/workouts/:workout", ({ params, body }, res) => {
      db.Workout.findOneAndUpdate({ _id: params.id},
                                  {$push: {excercises:body }},
                                  { upsert: true, useFindandModify:false},
                                  updatedWorkout => {
                                      res.json(updatedWorkout);
                                  })
    });

    //this post method allows the user to create a workout

    app.post('/api/workouts', (req,res) => {
      db.Workout.create({}).then(newWorkout => {
          res.json(newWorkout);
      });
    });
  
}