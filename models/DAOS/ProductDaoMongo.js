const { Schema, model } = require('mongoose');
const { productSchema } = require('./../schemas/product');
const ProductSchema = new Schema(productSchema);
const ProductModel = new model('Productos', ProductSchema);

const Response = require('./../../utils/Response');

class ProductDaoMongo {

    async getAll() {
        let response;
        try {
            const products = await ProductModel.find({ borrado:false });
            response = new Response(false, products, undefined);
        } catch(err) {
            response = new Response(true, undefined, `${err.name} - ${err.message}`);
        }
        return response;
    }

    async getById(id){
        let response;
        try {
            const products = await ProductModel.find({ borrado:false, _id:id });
            response = new Response(false, products, undefined);
        } catch(err)  {
            response = new Response(true, undefined, `${err.name} - ${err.message}`);
        }
        return response;
    }

    async create(product){
        let response;
        try {
            const newProduct = await ProductModel.create(product);
            response = new Response(false, newProduct, undefined);
        } catch(err)  {
            response = new Response(true, undefined, `${err.name} - ${err.message}`);
        }
        return response;
    }

    async updateById(id){

    }

    async deleteById(id){

    }

    

}

module.exports = ProductDaoMongo;