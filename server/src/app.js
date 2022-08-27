const express = require('express');
const path = require('path');
const cors = require('cors');

const planetsRouter = require('./routes/planets/planets.router');
const launchesRouter = require('./routes/launches/launches.router');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'build')));

app.use('/planets', planetsRouter);
app.use('/launches', launchesRouter);

module.exports = app;