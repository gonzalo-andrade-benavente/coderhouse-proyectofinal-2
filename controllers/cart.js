const { request, response } = require("express");

const { postEmptyCart, postCartProductById } = require('../services/cart');

const postCart = async (req = request, res = response) => {

    const result = await postEmptyCart();

    res.json({ data: result.data , });
}

const postCartProduct = async (req = request, res = response ) => {
    
    const { id } = req.params;
    const { id_prod } = req.body;

    const result = await postCartProductById(id, id_prod);

    res.json(result);
}

module.exports = {
    postCart ,
    postCartProduct ,
}