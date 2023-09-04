const express = require('express');
const mongoose = require('mongoose');
const apiController = require('./controllers/apiController');
const path = require('path');
var cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'build')));

const uri = process.env.ATLAS_URI; //uri is defined from .env file as var "ATLAS_URI"
mongoose.connect(uri);
const connection = mongoose.connection;
connection.on('error', error => console.error(error));
connection.once('open', () => {
  console.log('MongoDB database connection established successfully!');
});

const usersRouter = require('./routes/users');

app.use('/api/users', usersRouter);
app.post(
  '/travelInfo',
  apiController.getThingsToDo,
  apiController.hotelsToStayAt,
  apiController.getFlights,
  (req, res) => {
    res.status(200).json({
      hotels: res.locals.topHotels,
      thingsToDo: res.locals.locations,
      flights: res.locals.flightsInfo,
    });
  },
);
app.listen(port, () => {
  console.log(`listening on port ${port}.`);
});

//ATLAS USERNAME AND PASSWORDS

//user: Preston
//password: 9tDM0uGw2ay9uBCG

//user: Quinn
//password: TOCkTqry8O79xSHN

//user: Josh
//password: d32LFhqNxHux5ThR

//user: Ayden
//password: JG671QRbQCdJdCwm

//URI: mongodb+srv://<username>:<password>@travelagentllc.ibwyhrl.mongodb.net/?retryWrites=true&w=majority
