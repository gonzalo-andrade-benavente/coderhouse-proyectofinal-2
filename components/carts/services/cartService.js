const { CartModel } = require('../../../models/Cart');
const Response = require('../../../utils/Response');

class CartService {

    async postCartDb() {
        let result, response;
        try {
            result = await CartModel.create({
                timestamp: Date.now() ,
            });
            response = new Response(false, result, undefined);
        } catch (err) {
            response = new Response(true, undefined, `${err.name} - ${err.message}`);
        }

        return response;
    }

    async deleteCartDb(id) {
        let result, response;
        try {
            result =  result = await CartModel.findByIdAndDelete(id);
            response = new Response(false, result, undefined);
        } catch (err) {
            response = new Response(true, undefined, `${err.name} - ${err.message}`);
        }

        return response;
    }

    async postProductDb(id, id_prod) {
        let result, response;
        try {
            //result = { product: 'holaaaaaaa', id, id_prod};
            result = await CartModel.findById(id);
            result.products = [...result.products, id_prod];
            await result.save();
            response = new Response(false, result, undefined);
        } catch (err) {
            response = new Response(true, undefined, `${err.name} - ${err.message}`);
        }

        return response;
    }

    async getProductDb(id) {
        let result, response;
        try {
            result = result = await CartModel.findById(id);
            response = new Response(false, result, undefined);
        } catch (err) {
            response = new Response(true, undefined, `${err.name} - ${err.message}`);
        }

        return response;
    }

    async deleteProductDb(id, id_prod) {
        let result, response, products;
        try {
            result = await CartModel.findById(id);
            //products = result.products.filter(prd => prd._id.toString() !== id_prod);
            products = result.products.filter(prd => prd !== id_prod);
            result.products =  products;
            await result.save();
            response = new Response(false, result, undefined);
        } catch (err) {
            response = new Response(true, undefined, `${err.name} - ${err.message}`);
        }

        return response;
    }




}

module.exports = new CartService();