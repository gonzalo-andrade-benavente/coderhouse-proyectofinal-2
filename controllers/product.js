const { request, response } = require("express");

const { getProductById, getProducts, postProduct:saveProduct, deleteProductById, putProductById } = require('../services/product');

const Product = require('../utilities/Product');

const getProduct = async (req = request, res = response) => {
    
    const { id } = req.params;
    
    const result = id !== undefined ? await getProductById(id) : await getProducts();

    if (result.error === true) {
        return res.status(400).json({message: result.message});
    }

    if ( (result.data === undefined) || (result.data === null)) {
        return res.status(404).json({message: 'Not data found'});
    }

    res.json({ data: result.data ,});
}

const postProduct = async (req = request, res = response) => {

    const {nombre, descripcion, codigo, foto, precio, stock} = req.body;

    const product = new Product(nombre, descripcion, codigo, foto, precio, stock);

    const result = await saveProduct(product);

    if (result.error === true) {
        return res.status(400).json({message: result.message});
    }

    res.json({ data: result.data ,});
}

const deleteProduct = async (req = request, res = response) => {
    
    const { id } = req.params;

    const result = await deleteProductById(id);

    res.json({ data: result.data , });
}

const putProduct = async (req = request, res = response) => {

    const { id } = req.params;

    const { nombre, descripcion, codigo, foto, precio, stock } = req.body;

    const product = new Product(nombre, descripcion, codigo, foto, precio, stock);

    const result = await putProductById(id, product);

    res.json({ data: result.data , });
}

module.exports = {
    deleteProduct ,
    getProduct ,
    postProduct ,
    putProduct , 
}