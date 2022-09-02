const express = require('express');
const path = require('path');
const cors = require('cors');

const api = require('./routes/api');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'build')));

app.use('/v1', api);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;