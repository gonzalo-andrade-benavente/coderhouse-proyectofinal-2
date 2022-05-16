const { Schema, model } = require('mongoose');
const { cartSchema } = require('./../schemas/cart');
const CartSchema = new Schema(cartSchema);
const CartModel = new model('Carritos', CartSchema);

const Response = require('./../../utils/Response');

class CartDaoMongo {

    async create() {
        let response;
        try {
            const cart = await CartModel.create({
                timestamp: Date.now() ,
            });
            response = new Response(false, cart, undefined); 
        } catch(err) {
            response = new Response(true, undefined, `${err.name} - ${err.message}`);
        }

        return response;
    }

    async deleteById(id) {
        let response;
        try {
            const cart = await CartModel.findByIdAndDelete(id);
            response = new Response(false, cart, undefined);
        } catch(err) {
            response = new Response(true, undefined, `${err.name} - ${err.message}`);
        }
        return response;
    }

    async getById(id) {
        let response;
        try {
            const cart = await CartModel.findById(id);
            //response = new Response(false, cart, undefined);
            response = cart;
        }catch(err) {
            //response = new Response(true, undefined, `${err.name} - ${err.message}`);
            console.log(err);
        }
        return response; 
    }

}

module.exports = CartDaoMongo;