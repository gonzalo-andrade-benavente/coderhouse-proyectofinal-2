const { Schema, model } = require('mongoose');

const { cartSchema } = require('./schemas/cart');

const CartSchema = new Schema(cartSchema);

const CartModel = new model('Carritos', CartSchema);

module.exports = {
    CartModel
}