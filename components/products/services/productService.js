const { ProductModel } = require('../../../models/Product');
const Response = require('../../../utils/Response');

class ProductService {
    
    async getProductDb(id) {
        
        let result, response;
        
        try {
            //result = await ProductModel.findById(id);
            result = await ProductModel.find({ borrado:false, _id:id });
            response = new Response(false, result, undefined);
        } catch (err) {
            response = new Response(true, undefined, `${err.name} - ${err.message}`);
        }

        return response;
    }

    async getProductsDb() {
        let result, response;
        
        try {
            result = await ProductModel.find({ borrado: false});
            response = new Response(false, result, undefined);
        } catch (err) {
            response = new Response(true, undefined, `${err.name} - ${err.message}`);
        }

        return response;
    }

    async postProductDb(product) {
        let result, response;

        try {
            result = await ProductModel.create(product);
            response = new Response(false, result, undefined);
        } catch(err) {
            response = new Response(true, undefined, `${err.name} - ${err.message}`);
        }

        return response;
    }

    async deleteProductDB(id) {
        let result, response;

        try {
            result = await ProductModel.findByIdAndUpdate(id, { borrado:true });
            response = new Response(false, result, undefined);
        } catch(err) {
            response = new Response(true, undefined, `${err.name} - ${err.message}`);
        }
    }

}

module.exports = new ProductService();