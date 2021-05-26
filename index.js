const express = require('express');

const app = express();
const mongoose = require('./config/mongoose');

mongoose.connect();

app.use(express.json());

app.get('/', async (req, res) => {
  res.json('HEllo')
});

const port = 3500;

app.listen(3500, () => {
  console.log(`App listening on port ${port}`)
})