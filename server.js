//The packages are installed here
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//This makes the app files public
app.use(express.static("public"));

//This connects the app to heroku or localhost

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

//require('./seeders/seed')

//These pull the html and api routes to the server

require('./routes/html-routes')(app)
require('./routes/api-routes')(app)

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}..`);
})