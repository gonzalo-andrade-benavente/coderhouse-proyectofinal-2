const productService = require('../services/productService');
const ProductUtil = require('../../../utils/Product');

class Product {
    
    async getProduct(req, res) {

        const { id } = req.params;

        const result = id !== undefined ? await productService.getProductDb(id) : await productService.getProductsDb();
        
        res.send(result);
    }

    async postProduct(req, res) {

        const { nombre, descripcion, codigo, foto, precio, stock } = req.body;

        const product = new ProductUtil(nombre, descripcion, codigo, foto, precio, stock);

        const result = await productService.postProductDb(product);

        res.send(result);
    }

    async deleteProduct(req, res) {
        const { id } = req.params;

        const result = await productService.deleteProductDB(id);

        res.send(result);
    }
    
}

module.exports = new Product();