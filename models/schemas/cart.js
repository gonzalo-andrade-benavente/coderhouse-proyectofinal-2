const Joi = require('joi');
const { productSchema } = require('./product');

let timestamp = Joi.number();
let products = Joi.array();
//let productos = Joi.array().items(productosSchema);

const cartSchema = {
    timestamp
    , products: [ productSchema ]
}

module.exports = {
    cartSchema
}