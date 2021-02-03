const Joi = require('joi');

exports.userSchema = Joi.object({
  name: Joi.string().required(),
  lastname: Joi.string().required(),
  birth: Joi.date().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

exports.credentialsSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});