//const { CartModel } = require('../../../models/Cart');
const CartDao  = require('./../../../models/CartDaosFactory');
const Response = require('../../../utils/Response');

class CartService {

    async postCartDb() {
        let result;

        try {
            result = await CartDao.create();
        } catch(err) {
            console.log(err);
        }

        return result;
    }

    async deleteCartDb(id) {
        let result;

        try {
            result = await CartDao.deleteById(id);
        } catch(err) {
           console.log(err);
        }

        return result;
    }

    async postProductDb(id, id_prod) {
        let result;
        try {
            const cart = await CartDao.getById(id);
            cart.products  =  [...cart.products, id_prod];
            await cart.save();  
            result = new Response(false, cart, undefined);  
        } catch(err) {
            result = new Response(true, undefined, `${err.name} - ${err.message}`);
        }

        return result;

    }

    async getProductDb(id) {
        let result;
        try {
            const cart = await CartDao.getById(id);
            result = new Response(false, cart, undefined);
        } catch (err) {
            result = new Response(true, undefined, `${err.name} - ${err.message}`);
        }

        return result;
    }

    async deleteProductDb(id, id_prod) {
        let result;

        try {
            const cart = await CartDao.getById(id);
            const products = cart.products.filter(prd => prd !== id_prod);
            cart.products = products;  
            await cart.save();
            result = new Response(false, cart, undefined);  
        } catch(err) {
            result = new Response(true, undefined, `${err.name} - ${err.message}`);
        }
        return result;
    }




}

module.exports = new CartService();