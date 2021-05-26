require('dotenv').config();
const express = require('express');

const app = express();
const mongoose = require('./config/mongoose');
const appConfig = require('./config/vars')

mongoose.connect();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', async (req, res) => {
  return res.json('HEllo')
});

require('./routes')(app);

const port = appConfig.port || 3500;

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})