require('dotenv').config();
const express = require('express');
const cors = require('cors')

require('./config/firebase');
const responseManager = require('./lib/responseManager')

const app = express();
const mongoose = require('./config/mongoose');
const appConfig = require('./config/vars')

mongoose.connect();

app.use(cors())

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(responseManager)

app.get('/', async (req, res) => {
  return res.json('Welcome to addressbook app')
});

require('./routes')(app);

const port = appConfig.port || 3500;

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});

module.exports = app;