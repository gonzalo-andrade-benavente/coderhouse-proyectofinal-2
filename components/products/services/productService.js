//const { ProductModel } = require('../../../models/Product');
const Response = require('../../../utils/Response');
const ProductDao = require('../../../models/ProductDaosFactory');

class ProductService {
    
    async getProductDb(id) {
        
        let result;
        
        try {
            result = await ProductDao.getById(id);
        } catch (err) {
            consolr.log(err);
        }

        return result;
    }

    async getProductsDb() {
        let result;
        
        try {
            result = await ProductDao.getAll();
        } catch (err) {
            console.log(err);
        }

        return result;
    }

    async postProductDb(product) {
        let result;

        try {
            result = await ProductDao.create(product);
        } catch(err) {
            console.log(err);
        }

        return result;
    }

    async deleteProductDB(id) {
        let result, response;

        try {
            //result = await ProductModel.findByIdAndUpdate(id, { borrado:true });
            response = new Response(false, result, undefined);
        } catch(err) {
            response = new Response(true, undefined, `${err.name} - ${err.message}`);
        }
        
        return response;
    }

    async putProductDB(id, product) {
        let result, response;

        try {
            //result =  await ProductModel.findByIdAndUpdate(id, product, { new: true} );
            response = new Response(false, result, undefined);
        } catch(err) {
            response = new Response(true, undefined, `${err.name} - ${err.message}`);
        }

        return response;
    }

}

module.exports = new ProductService();