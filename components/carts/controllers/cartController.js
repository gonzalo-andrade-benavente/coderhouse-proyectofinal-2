const cartService = require('../services/cartService');

class CartController {

    async postCart(req, res) {
        const result = await cartService.postCartDb();
        res.send(result);
    }

    async deleteCart(req, res) {
        res.send({
           msg: 'deleteCart' 
        });
    }


}


module.exports = new CartController();