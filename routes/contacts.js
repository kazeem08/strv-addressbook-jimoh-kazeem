const express = require('express');

const route = express.Router();
const ContactController = require('../controllers/contact');
const auth = require('../middlewares/auth');
const { contactSchema } = require('../lib/schemaValidator')
const { celebrate, errors } = require('celebrate');

route.post('/', auth, celebrate(contactSchema), async (req, res) => ContactController.addContact(req, res));

route.use(errors());

module.exports = route;