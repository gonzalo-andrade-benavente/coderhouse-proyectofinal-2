const { Schema, model } = require('mongoose');

const { productSchema } = require('./schemas/product');

const ProductSchema = new Schema(productSchema);

const ProductModel = new model('Productos', ProductSchema);

module.exports = {
    ProductModel
}