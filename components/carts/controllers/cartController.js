const cartService = require('../services/cartService');

class CartController {

    async postCart(req, res) {
        const result = await cartService.postCartDb();
        res.send(result);
    }

    async deleteCart(req, res) {
        const { id } = req.params;
        const result = await cartService.deleteCartDb(id);
        res.send(result);
    }

    async postProduct(req,  res) {
        const { id } = req.params;
        const { id_prod } = req.body;
        const result = await cartService.postProductDb(id, id_prod);

        if (result.error)
            return res.status(400).send(result); 

        res.send(result);
    }

    async getProduct(req, res) {
        const { id } = req.params;
        const result = await cartService.getProductDb(id);
        res.send(result);
    }

    async deleteProduct(req, res) {
        const { id, id_prod } = req.params;
        const result = await cartService.deleteProductDb(id, id_prod);
        res.send(result);
    }


}


module.exports = new CartController();