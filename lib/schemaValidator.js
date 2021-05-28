/*eslint-disable*/
const Joi = require('joi');

/**
 * You can use schemas to validate http request bodies, etc to make sure they are valid and conform to the required format.
 * You can check to make sure a required parameter is present and conforms to whatever format was intended.
 * You can read more on the schema validation library here https://www.npmjs.com/package/joi
 */

//declare fields here
const email = Joi.string().email().required();
const password = Joi.string().required();
const firstName = Joi.string().required();
const lastName = Joi.string().required();
const phoneNumber = Joi.string().required();
const address = Joi.string().required();

module.exports = {

  userSchema: {
    body: Joi.object().keys({
      email,
      password
    })
  },

  contactSchema: {
    body: Joi.object().keys({
      firstName,
      lastName,
      phoneNumber,
      address,
    })
  },

};