const { ProductModel } = require('../../../models/Product');
const Response = require('../../../utils/Response');

class ProductService {
    
    async getProductDb(id) {
        
        let result, response;
        
        try {
            result = await ProductModel.findById(id);
            response = new Response(false, result, undefined);
        } catch (err) {
            response = new Response(true, undefined, `${err.name} - ${err.message}`);
        }

        return response;
    }

    async getProductsDb() {
        let result, response;
        
        try {
            result = await ProductModel.find({});
            response = new Response(false, result, undefined);
        } catch (err) {
            response = new Response(true, undefined, `${err.name} - ${err.message}`);
        }

        return response;
    }

}

module.exports = new ProductService();