const { ProductModel } = require('../models/Product');


const getProductById = async (id) => {
    
    let result;
    
    try {
        const product = await ProductModel.findById(id);
        result = {
            error: false ,
            data: product ,
        }
    } catch (err) {
        result = {
            error: true ,
            data: undefined ,
            message: `${err.name} - ${err.message}` ,
        }
    }

    return result;
}


const getProducts = async () => {

    let result;

    try {
        const products = await ProductModel.find({});
        result = {
            error: false ,
            data: products ,
        }
    } catch (err) {
        result = {
            error: true ,
            data: undefined ,
            message: `${err.name} - ${err.message}` ,
        }
    }

    return result;

}

module.exports = {
    getProductById ,
    getProducts ,
}

