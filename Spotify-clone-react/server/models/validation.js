const Joi = require('joi');

module.exports.loginValidation = Joi.object({
   
    loginEmail:Joi.string().email().required(),
    loginPassword:Joi.string().regex(/^[a-zA-Z0-9]{6,}$/)
    .required()
    .min(6)
})

