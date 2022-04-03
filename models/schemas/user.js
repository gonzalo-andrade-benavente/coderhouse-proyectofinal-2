const Joi = require('joi');

let timestamp = Joi.number();
let email = Joi.string();
let password = Joi.string();
let nombre = Joi.string();
let direccion = Joi.string();
let edad  = Joi.number();
let telefono = Joi.number();
let avatar = Joi.string();

const userSchema = {
    timestamp
    , email
    , password
    , nombre
    , direccion
    , edad
    , telefono
    , avatar

}

module.exports = {
    userSchema
}