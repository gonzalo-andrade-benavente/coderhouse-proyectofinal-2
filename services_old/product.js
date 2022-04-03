const { ProductModel } = require('../models/Product');
const Response = require('../utilities/Response');

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
        const products = await ProductModel.find({}).sort( { "timestamp": -1 } );
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

const postProduct = async (product) => {
    
    let result, response;

    try {
        result = await ProductModel.create(product);
        response = new Response(false, result, undefined);
    } catch(err) {
        response = new Response(true, undefined, `${err.name} - ${err.message}`);
    }

    return response;
}

const deleteProductById = async (id) => {
    let result, response;

    try {
        result = await ProductModel.findByIdAndDelete(id);
        response = new Response(false, result, undefined);
    }catch(err) {
        response = new Response(true, undefined, `${err.name} - ${err.message}`);
    }

    return response;
}

const putProductById = async (id, product) => {
    let result, response;

    try {
        result = await ProductModel.findByIdAndUpdate(id, product, { new: true });
        response = new Response(false, result, undefined);
    }catch(err) {
        response = new Response(true, undefined, `${err.name} - ${err.message}`);
    }

    return response;

}

module.exports = {
    deleteProductById ,
    getProductById ,
    getProducts ,
    postProduct ,
    putProductById ,
}

