const productService = require('../services/productService');


class Product {
    
    async getProduct(req, res) {

        const { id } = req.params;

        const result = id !== undefined ? await productService.getProductDb(id) : await productService.getProductsDb();
        
        res.send(result);
    }
    
}

module.exports = new Product();