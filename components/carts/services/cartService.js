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


}

module.exports = new CartService();