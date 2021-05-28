const express = require('express');
const route = express.Router();

const UserController = require('../controllers/user');
const { userSchema } = require('../lib/schemaValidator')
const { celebrate, errors } = require('celebrate');



route.post('/', celebrate(userSchema), async (req, res) => UserController.registerUser(req, res));

route.post('/auth', celebrate(userSchema), async (req, res) => UserController.login(req, res));

route.use(errors());

module.exports = route;