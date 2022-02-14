const { request, response } = require("express");

const { getProductById, getProducts } = require('../services/product');

const getProduct = async (req = request, res = response, next) => {
    
    const { id } = req.params;
    
    const result = id !== undefined ? await getProductById(id) : await getProducts();

    if (result.error === true) {
        return res.status(400).json({message: result.message});
    }

    if ( (result.data === undefined) || (result.data === null)) {
        return res.status(404).json({message: 'Not data found'});
    }

    res.json({data: result.data});
}

module.exports = {
    getProduct
}